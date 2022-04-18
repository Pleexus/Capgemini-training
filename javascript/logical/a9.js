function Q9() {
    var secretNumber = Math.round(Math.random() * 999 + 1);
    console.log(secretNumber);
    var count = 1;
    var guess = parseInt(prompt("Guess a number between 1 and 1000"));
    while (count < 999) {
        if (guess == secretNumber) {
            alert("You Won" + "\n" + "It Took " + count + " Guesses");
            break;
            //return "You Won";
        }
        else if (guess > secretNumber) {
            count += 1;
            guess = parseInt(prompt("Too High. Guess Again"));
            //return "The Number is greater than the secret number";
        }
        else if (guess < secretNumber) {
            count += 1;
            guess = parseInt(prompt("Too Low. Guess Again"));
            //return "The Number is less than the secret number";
        }
    }
    // alert( checknum(guess, secretNumber));
}