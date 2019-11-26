age = prompt("Hey! Are you old enough to be in this bar? (hint: enter at least 95 for a surprise!)");
if (age < 18){
    alert("Get out of here, I can't have kids ruining the place.");
} else if (age >= 18 && age < 21) {
    alert("Come on in but you've got to wear this bracelet so you don't get served.");
} else if (age >= 95) {
    alert("Wow. Mad respect to this crazy old guy. Hey, hey Charles! Come check out this relic who still rocks harder than Steven Tyler!")
} else {
    alert("You're good to go, here's your drink tickets. Have fun!");
}
