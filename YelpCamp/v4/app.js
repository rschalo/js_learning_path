var express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  Campground = require("./models/campground"),
  Comment = require(`./models/comment`),
  seedDB = require("./seeds");

seedDB();
mongoose.connect("mongodb://localhost/yelp_camp_v3", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + `/public`))

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
app.get(`/campgrounds/:id/comments/new`, function(req, res) {
  Campground.findById(req.params.id, function(err, campground){
    if(err) {
      console.log(err)
    } else {
      res.render(`comments/new`, {campground: campground});
    }
  })
})

app.post(`/campgrounds/:id/comments`, function(req, res){
  Campground.findById(req.params.id, function(err, campground){
    if(err){
      console.log(err);
      res.redirect(`/campgrounds`);
    } else {
      Comment.create(req.body.comment, function(err, comment){
        if(err){
          console.log(err);
        } else {
          campground.comments.push(comment);
          campground.save();
          res.redirect(`/campgrounds/` + campground._id)
        }
      }
    )}
  })
});
