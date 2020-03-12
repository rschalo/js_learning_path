var express = require(`express`);
var router = express.Router();
var Campground = require(`../models/campground`);

//campground get and new
router
  .route(`/`)
  .get((req, res) => {
    return Campground.find({})
      .then(allCampgrounds => {
        res.render(`campgrounds/index`, { campgrounds: allCampgrounds });
      })
      .catch(err => {
        console.error(err);
      });
  })
  .post(isLoggedIn, (req, res, next) => {
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    var author = {
      id: req.user._id,
      username: req.user.username
    };
    var newCampground = {
      name: name,
      image: image,
      description: description,
      author: author
    };
    console.log(req.user);

    Campground.create(newCampground, (err, newlyCreated) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`Newly created campground: ${newlyCreated}`);
        next();
      }
    });
    //redirect back to campgrounds page
    res.redirect("/");
    console.log("Added " + newCampground["name"]);
  });

//campground new route
router.get("/new", isLoggedIn, function(req, res) {
  res.render("campgrounds/new");
});

//campground show route
router.get("/:id", function(req, res) {
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

// EDIT CAMPGROUND ROUTE
router.get(`/:id/edit`, function(req, res){
  Campground.findById(req.params.id, function(err, foundCampground){
    if (err) {
      res.redirect("/campgrounds");
    } else {
      res.render("campgrounds/edit", { campground: foundCampground });
    }
  });
});

// UPDATE CAMPGROUND ROUTE

router.put(`/:id`, (req, res) => {
  Campground.findByIdAndUpdate(
    req.params.id,
    req.body.campground,
    (err, updatedCampground) => {
      if (err) {
        res.redirect(`/campgrounds`);
      } else {
        res.redirect(`/campgrounds/` + req.params.id);
      }
    }
  );
});

// Destroy campground Route
router.delete(`/:id`, function(req, res){
  Campground.findByIdAndRemove(req.params.id, function(err){
    if(err){
      res.redirect(`/campgrounds`);
    } else {
      res.redirect(`/campgrounds`)
    }
  })
})

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect(`/login`);
  }
}

module.exports = router;
