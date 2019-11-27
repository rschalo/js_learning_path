var correct_number = 7;
var guess = prompt("Guess a number between 1 and 10.");
def guessing_game() = function(guess) {
    if (guess > 10 || guess < 0){
        alert("Please enter a valid number and try again.");
    } else if (guess < correct_number){
        alert("Your guess is too low, try again!");
    } else if (guess > correct_number){
        alert("Your guess is too high! Settle down!");
    } else if (guess = correct_number){
        alert("You did it! You got the right answer!")
    }
};
guessing_game()
