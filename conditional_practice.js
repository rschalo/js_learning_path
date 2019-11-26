var age = prompt("Hey! Are you old enough to be in this bar? (hint: enter at least 95 for a surprise!)");

if (age < 18 && age > 0){
    alert("Get out of here, I can't have kids ruining the place.");
} else if (age >= 95){
    alert("Wow. Mad respect to this crazy old guy. Hey, hey Charles! Come check out this relic who still rocks harder than Steven Tyler!");
} else if (age == 21){
    alert("Happy 21st birthday! Your first drink is on the house.");
} else if (age % 2 === 1){
    alert("Having an odd year? Your age is!");
} else if (age % Math.sqrt(age) === 0){
    alert("WOW! Your age is a perfect square!");
} else if (age < 0){
    alert("Error, please enter a real age");
} else if (age >= 18 && age < 21) {
    alert("Come on in but you've got to wear this bracelet so you don't get served.")
};
