var express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  passport = require(`passport`),
  LocalStrategy = require(`passport-local`),
  Campground = require("./models/campground"),
  Comment = require(`./models/comment`),
  User = require(`./models/user`),
  seedDB = require("./seeds");

seedDB();
mongoose.connect("mongodb://localhost/yelp_camp_v3", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + `/public`));
app.use(
  require(`express-session`)({
    secret: `Zoey is my favorite dog in the whole world`,
    resave: false,
    saveUninitialized: false
  })
);

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next) {
  res.locals.currentUser = req.user;
  next();
});

app.listen(3000, function(req, res) {
  console.log("YelpCamp server is live");
});

app.get("/", function(req, res) {
  res.render("landing");
});

app.get("/campgrounds", function(req, res) {
  Campground.find({}, function(err, allCampgrounds) {
    if (err) {
      console.log(err);
    } else {
      res.render("campgrounds/index", { campgrounds: allCampgrounds });
    }
  });

  //res.render("campgrounds", {campgrounds:campgrounds});
});

app.get("/campgrounds/new", function(req, res) {
  res.render("campgrounds/new");
});

app.post("/campgrounds", function(req, res) {
  // get data from form and add to campgrounds array
  var name = req.body.name;
  var image = req.body.image;
  var description = req.body.description;
  var newCampground = { name: name, image: image, description: description };
  Campground.create(newCampground, function(err, newlyCreated) {
    if (err) {
      console.log(err);
    } else {
      console.log(`Newly created campground: ${newCampground}`);
    }
  });
  //redirect back to campgrounds page
  res.redirect("/campgrounds");
  console.log("Added " + newCampground["name"]);
});

// SHOW
app.get("/campgrounds/:id", function(req, res) {
  Campground.findById(req.params.id)
    .populate("comments")
    .exec(function(err, foundCampground) {
      if (err) {
        console.log(err);
      } else {
        console.log(foundCampground);
        res.render("campgrounds/show", { campground: foundCampground });
      }
    });
});

//comments routes
//new route
app.get(`/campgrounds/:id/comments/new`, isLoggedIn, function(req, res) {
  Campground.findById(req.params.id, function(err, campground) {
    if (err) {
      console.log(err);
    } else {
      res.render(`comments/new`, { campground: campground });
    }
  });
});

app.post(`/campgrounds/:id/comments`, isLoggedIn, function(req, res) {
  Campground.findById(req.params.id, function(err, campground) {
    if (err) {
      console.log(err);
      res.redirect(`/campgrounds`);
    } else {
      Comment.create(req.body.comment, function(err, comment) {
        if (err) {
          console.log(err);
        } else {
          campground.comments.push(comment);
          campground.save();
          res.redirect(`/campgrounds/` + campground._id);
        }
      });
    }
  });
});

//AUTH ROUTES
//show register
app.get(`/register`, function(req, res) {
  res.render(`register`);
});
//handle sign up logic
app.post(`/register`, function(req, res) {
  let newUser = new User({ username: req.body.username });
  User.register(newUser, req.body.password, function(err, user) {
    if (err) {
      console.log(err);
      res.render(`register`);
    } else {
      passport.authenticate(`local`)(req, res, function() {
        res.redirect(`/campgrounds`);
      });
    }
  });
});
//show and post login form
app.get(`/login`, function(req, res) {
  res.render(`login`);
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect(`/login`);
  }
}

app.post(
  `/login`,
  passport.authenticate(`local`, {
    successRedirect: `/campgrounds`,
    failureRedirect: `/login`
  })
);
//logout route
app.get(`/logout`, function(req, res) {
  req.logout();
  res.redirect(`/campgrounds`);
});
