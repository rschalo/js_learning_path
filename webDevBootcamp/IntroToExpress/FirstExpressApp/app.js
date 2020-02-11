var express = require("express");
var app = express();

app.get("/", function(req, res) {
  res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res) {
  var animal = req.params.animal.toLowerCase();
  var sounds = {
    pig: "Oink",
    cow: "Moo",
    dog: "Woof! Woof!",
    cat: "I hate you, hooman",
    goldfish: "blub blub"
  };
  var sound = sounds[animal];
  res.send("The " + animal + " says '" + sound + "'");
});

app.get("/repeat/:word/:num", function(req, res) {
  var word = req.params.word;
  var num = Number(req.params.num);
  var phrase = [];
  for (i = 0; i < num; i++) {
    phrase += word;
    phrase += " ";
  }
  res.send(phrase);
});

app.get("/*", function(req, res) {
  res.send("Sorry, page not found... Try again");
});

app.listen(3000, function() {
  console.log("Server Connected on localhost:3000");
});
