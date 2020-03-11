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

//requiring routes
var commentRoutes = require(`./routes/comments`),
  campgroundRoutes = require(`./routes/campgrounds`),
  indexRoutes = require(`./routes/index`);

//seedDB(); seed the database

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

app.use(`/`, indexRoutes);
app.use(`/campgrounds/:id/comments`, commentRoutes);
app.use(`/campgrounds`, campgroundRoutes);

app.listen(3000, function(req, res) {
  console.log("YelpCamp server is live");
});