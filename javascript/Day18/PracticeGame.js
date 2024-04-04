console.log("Guess the Number Between 1 to 100");
let userGuess = parseInt(prompt("Enter the Number"));
const compGuess = Math.floor(Math.random()*100) + 1;
while(compGuess !== userGuess)
{
    if (userGuess > compGuess)
    {
        userGuess = parseInt(prompt("The number is less than what you guessed! Try again:"));
    }
    else{
        userGuess = parseInt(prompt("The number is greater than what you guessed! Try again:"));
    }
}
if(userGuess==compGuess)
{
    console.log("Congratulations!! You win")
}

