
    var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var wins = 0;
    var losses = 0;
    var charsTyped = [];
    var guessesLeft = 10;
    var delay = 2000;



    function reset() {
        charsTyped = [];
        guessesLeft = 10;

    };




    document.onkeypress = function(evt) {


        // Ensure we only handle printable keys
        var charCode = typeof evt.which == "charsTyped" ? evt.which : evt.keyCode;


        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


        


console.log(charsTyped.indexOf(userGuess));

        // Logic for comparaing user choice against the computers random choice 
        if (charsTyped.indexOf(userGuess) == -1 ) {


            if (charCode) {
                charsTyped.push(String.fromCharCode(charCode));
            }
            guessesLeft--;

            if (userGuess == computerGuess) {
                wins++


                alert("You win with letter: " + charsTyped[charsTyped.length - 1])
                reset();



            } else if (guessesLeft == 0) {

                reset()
                losses++;

            }

        } else {

            alert(" You have already used this letter");

        }

        // keeps track of the scores 
        var html = "<center> <p>Choose a letter any letter! </p>" +
            "<p>wins: " +
            wins +
            "</p>" +
            "<p>losses: " +
            losses +
            "</p>" +
            "<p>Characters chosen: " + charsTyped + "</p>" + "<p> Guesses Left: " + guessesLeft + "</p>";




        document.querySelector('#game').innerHTML = html;


    };