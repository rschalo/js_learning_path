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
  .post((req, res, next) => {
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    var newCampground = { name: name, image: image, description: description };
    Campground.create(newCampground, (err, newlyCreated) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`Newly created campground: ${newCampground}`);
        next();
      }
    });
    //redirect back to campgrounds page
    res.redirect("/");
    console.log("Added " + newCampground["name"]);
  });

//campground new route
router.get("/new", function(req, res) {
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

module.exports = router;
