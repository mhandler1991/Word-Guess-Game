// Game

var startGame = function () {

    console.log("Game Started");

    var teams = [
        'Hawks',
        'Celtics',
        'Nets',
        'Hornets',
        'Bulls',
        'Cavaliers',
        'Mavericks',
        'Nuggets',
        'Pistons',
        'Warriors',
        'Rockets',
        'Pacers',
        'Clippers',
        'Lakers',
        'Grizzlies',
        'Heat',
        'Bucks',
        'Timberwolves',
        'Pelicans',
        'Knicks',
        'Thunder',
        'Magic',
        'Sixers',
        'Suns',
        'Trail Blazers',
        'Kings',
        'Spurs',
        'Raptors',
        'Jazz',
        'Wizards'
    ];

    // Random Team Selection
    var team = Math.floor(Math.random() * teams[length]);
    // Log Random Team Selection
    console.log(team);
    // Calculate the # characters in the string/ randomly selected value
    var n = team.length;
    // Log # of characters
    console.log(n);

    var playerWins = 0;
    var playerLoses = 0;
    var playerGuessesLeft = 10;
    var playerGuesses = "";
    var word = $("#Word");

    // Take the randomly chosen word - loop though the word and seperate each letter into a div
    for (i = 0; i < team.length; i++) {
        // var = div
        var letter =  $("<div>");
        // add class
        letter.addclass("letterDisplay");
        // add value
        letter.attr("id", team.charAt(i));
        // location
        letter.attr("location", team[i]);
        // add text
        letter.text("-");
        // append
        $("#letter").append(letter);

    };

    document.onkeyup = function (event) {
        // Variables
        var userInput = event.key.LowerCase();
        // Log user Input
        console.log(userInput);

        var divIdSearch = "#" + userInput

        var match = team.match();

        // count # of matches
        // var numMatchs

        // If userInput === <div> value
        if(match !== null) {
        // update shown value from - to letter
            $(divIdSearch).text(userInput);
        // update # left n - numMatchs
            n = n - numMatchs;
        }
        else{
            // update guesses left
            playerGuessesLeft--;
            // if not, update previous guesses
            playerGuesses = playerGuesses + ";" + userInput;
        };

        if(n===0){
            //plus win
            playerWins++;
            //restart
        };

        if(playerGuessesLeft===0){
            // plus loss
            playerLoses--;
            // restart
        };

    };
}



// Press Button to Begin Game (Function)
// Define Variables
// Define loses variable
// Define Wins variable
// Define Current Guesses variable
// Define Guesses Left variable
// Var Team Array
// var randomTeam  = (random team) from Array
// Take the randomly chosen word
// loop though the word and seperate each letter into an array 
// print each letter individually onto page onto a <div> with text "-" & value = letter
// when user inputs, loop through array to determine if the input = value
// if true, update value 
// if not, update previous guesses
// update guesses left