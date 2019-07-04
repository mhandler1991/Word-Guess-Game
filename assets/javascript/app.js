// Game 

var startGame = function () {

    //Display Starting Board & Messages
    document.getElementById("startMessage").innerHTML = "Lets begin...";
    document.getElementById("playerWins").innerHTML = 0;
    document.getElementById("playerLoses").innerHTML = 0;
    document.getElementById("playerGuessesLeft").innerHTML = 5;
    document.getElementById("playerGuesses").innerHTML = "";
    document.getElementById("startReset").innerHTML = "Reset";

    // Variables
    var playerWins = 0;
    var playerLoses = 0;
    var playerGuessesLeft = 5;
    var playerGuesses = "";
    var computerChoice = "a";
        // Variable type for computer choice
    console.log(typeof computerChoice);
    var letters = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "x",
        "y",
        "z"
    ];
    var computerChoice = letters[Math.floor(Math.random() * letters.length)];

    //Display Computer Choice
    console.log("Computer Choice: " + computerChoice);


    // Compare Computer to Person & make calculations on Key Press
    document.onkeyup = function (event) {

        var userInput = event.key.toLowerCase();
        // Log User Input
        console.log("User Choice: " + userInput);
        // Do the choices match?
        console.log(computerChoice == userInput);
        // Type of variable - computer choice
        console.log("CC " + typeof computerChoice);
        // Type of variable - user input 
        console.log("UI " + typeof userInput);

        // Determine if player guess is a match
        if (computerChoice == userInput) {
            // + Win
            playerWins++;
            // Print Win Value
            document.getElementById("playerWins").innerHTML = playerWins;
            // Update Guesses Left
            playerGuessesLeft = 5;
            // Print Guesses Left
            document.getElementById("playerGuessesLeft").innterHTML = playerGuessesLeft;
            // Computer Chooses new Letter
            var computerChoice = letters[Math.floor(Math.random() * letters.length)];
            // Console Log New Letter
            console.log("New Guess: " + computerChoice);
            // Clear Player Guesses
            playerGuesses = "";
            // Print PlayerGuesses
            document.getElementById("playerGuesses").innerHTML = playerGuesses;

        } else {
            // - Guesses Left
            playerGuessesLeft--;
            // Print Guesses Left
            document.getElementById("playerGuessesLeft").innerHTML = playerGuessesLeft;
            // Update Guesses so Far
            playerGuesses = playerGuesses + "; " + userInput
            // Print Guesses so Far
            document.getElementById("playerGuesses").innerHTML = playerGuesses;
        }

        if (playerGuessesLeft === 0) {
            // + Loses
            playerLoses++;
            // Print Loss 
            document.getElementById("playerLoses").innerHTML = playerLoses;
            // Reset Player Guesses
            playerGuessesLeft = 5;
            // Print Guesses Left
            document.getElementById("playerGuessesLeft").innterHTML = playerGuessesLeft;
            // Computer Chooses new Letter
            var computerChoice = letters[Math.floor(Math.random() * letters.length)];
            // Console Log New Letter
            console.log("New Guess: " + computerChoice);
            // Clear Player Guesses
            playerGuesses = "";
            // Print PlayerGuesses
            document.getElementById("playerGuesses").innerHTML = playerGuesses;

        } else {

        }

    }
}



// Random Notes:
// Reset Means: Update Computer Guess, Update Guesses Left, Update Guesses so far
// document.writeln(); << this adds
// document.onkeyup = function (event) {
// Object.addEventListener("click", startGame);