const max = prompt("Enter the max number");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the number");

while (true) {
    if (guess == "quit") {
        console.log("User quit");
        break;
    }

    if (guess == random) {
        console.log("yor are right! congrate!! random number was ", random);
        break;
    } else if (guess < random) {
        guess = prompt("hint : your guess was small please try again.")
    }
    else {
        guess = prompt("hint : your guess was large please try again.")
    }
}