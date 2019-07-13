//**************************
        // Document Ready
        //**************************

        $(document).ready(function () {

            //**************************
            // VARIABLES
            //**************************

            // Guesses Left
            var guessesLeft = 10;

            // Wins
            var wins = 0;

            // Losses
            var losses = 0;

            // var word possibilities
            var arrayOptions = [
                'hawks',
                'celtics',
                'nets',
                'hornets',
                'bulls',
                'cavaliers',
                'mavericks',
                'nuggets',
                'pistons',
                'warriors',
                'rockets',
                'pacers',
                'clippers',
                'lakers',
                'grizzlies',
                'heat',
                'bucks',
                'timberwolves',
                'pelicans',
                'knicks',
                'thunder',
                'magic',
                'sixers',
                'suns',
                'trail Blazers',
                'kings',
                'spurs',
                'raptors',
                'jazz',
                'wizards'
            ];

            // log team awesome
            // console.log("TA: " + arrayOptions);

            // choose a position in the array
            var randomNum = Math.floor(Math.random() * arrayOptions.length);

            // log Number in Array
            console.log("Random Num: " + randomNum);

            // define the word
            var word = arrayOptions[randomNum].toLocaleLowerCase();

            // log the chosen person
            console.log("word: " + word);

            // Word Length
            var n = word.length;

            // log word length
            console.log("word Length: " + n);

            //**************************
            // Display/print word
            //**************************

            for (var i = 0; i < word.length; i++) {
                // var = H3
                var letter = $("<h3>");
                // add value
                letter.attr("value", word.charAt(i));
                // add text
                letter.text("-");
                // append
                $("#word").append(letter);
            };



            //**************************
            // Game Reset
            //**************************

            function GameReset() {

                // Log Game has reset
                console.log("Game has Reset");

                //**************************
                // Variables
                //**************************

                // Guesses Left
                guessesLeft = 10;

                // Print GuessesLeft
                $("#guessesLeft").text(guessesLeft);

                // Log Reset Guesses Left
                console.log("RESET GL: " + guessesLeft);

                // Log Reset Wins Left
                console.log("RESET W: " + wins);

                // Log Reset Losses Left
                console.log("RESET L: " + losses);

                // Reset Printed Guesses
                $("#guesses").text("");

                // var word possibilities
                arrayOptions = [
                    'hawks',
                    'celtics',
                    'nets',
                    'hornets',
                    'bulls',
                    'cavaliers',
                    'mavericks',
                    'nuggets',
                    'pistons',
                    'warriors',
                    'rockets',
                    'pacers',
                    'clippers',
                    'lakers',
                    'grizzlies',
                    'heat',
                    'bucks',
                    'timberwolves',
                    'pelicans',
                    'knicks',
                    'thunder',
                    'magic',
                    'sixers',
                    'suns',
                    'trail Blazers',
                    'kings',
                    'spurs',
                    'raptors',
                    'jazz',
                    'wizards'
                ];

                // log team awesome
                // console.log("RESET TA: " + arrayOptions);

                // choose a position in the array
                randomNum = Math.floor(Math.random() * arrayOptions.length);

                // log Number in Array
                console.log("RESET Random Num: " + randomNum);

                // define the word
                word = arrayOptions[randomNum].toLocaleLowerCase();

                // log the chosen person
                console.log("RESET word: " + word);

                // Word Length
                n = word.length;

                // log word length
                console.log("RESET word Length: " + n);

                // empty word H3
                $("#word").empty();

                // Reset Match Variable
                Match = false;

                //**************************
                // Display/print word
                //**************************

                for (var i = 0; i < word.length; i++) {
                    // var = H3
                    var letter = $("<h3>");
                    // add value
                    letter.attr("value", word.charAt(i));
                    // add text
                    letter.text("-");
                    // append
                    $("#word").append(letter);
                };

            }



            //**************************
            // Game
            //**************************

            document.onkeyup = function (event) {

                // User Input
                var userInput = event.key.toLowerCase();

                // Is there a Match Variable
                var match = false;

                // log user Input
                console.log("UI: " + userInput);

                // GuessesLeft - 1
                guessesLeft--;

                // Print Guesses Left
                $("#guessesLeft").text(guessesLeft);

                // Log GuessesLeft
                console.log("GL: " + guessesLeft);


                //**************************
                // Loop Through letters in word
                //**************************

                for (var i = 0; i < word.length; i++) {

                    // define letter variable of letter in word
                    var letter = word.charAt(i);

                    // If user Input === letter
                    if (letter === userInput) {

                        // Update Match Variable
                        match = true;

                        // log if there was a match
                        console.log("Match: " + match);

                        // take the length of the letter - 1 for each match
                        n--;

                        // Log the value of n
                        console.log("Value of n: " + n);
                    }
                }

                //**************************
                // Determine if there was a match
                //**************************

                if (match === true) {
                    $("#word h3").each(function (index) {

                        // Log the value of the H3 Letter
                        console.log($(this).attr("value"));

                        //**************************
                        // Determine if the H3 letter === UserInput
                        //**************************

                        if ($(this).attr("value") === userInput) {

                            // If match <H3> update text
                            $(this).text(userInput);
                        }
                    });

                } else {
                    // If no match, add letter to past Guesses
                    $("#guesses").append(userInput + ";");
                }

                //**************************
                // When the user runs out of guesses
                //**************************

                if (guessesLeft === 0) {

                    // Add Losses
                    losses++

                    // log losses
                    console.log("Losses: " + losses);

                    // print losses to page
                    $("#losses").text(losses);

                    // restart Game function
                    GameReset();
                }

                //**************************
                // If user guesses all letters correctly
                //**************************

                if (n === 0) {

                    // Add Win
                    wins++

                    // log wins
                    console.log("wins: " + wins);

                    // Print Wins to Page
                    $("#wins").text(wins);

                    // Define Audio Win Music
                    var audio = new Audio('../audio/NBAJam.mp3');

                    // Play Audio file
                    audio.play();

                    // restart Game function
                    GameReset();
                }
            }

        })