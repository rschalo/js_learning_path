//instructed to create a series of prompts that collects user info and then passes it to the console.

var firstName = prompt("What is your first name?");
var lastName = prompt("What is your last name?");
var userAge = prompt("How old are you?");
console.log("Your full name is " + firstName + " " + lastName);
if (userAge > 1) {
    console.log("You are " + userAge + " years old")
} else {
    console.log("You're a bit young for this, huh?")
};
//bonus: added if else for userAge == 1
