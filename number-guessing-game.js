var prompt = require('prompt');

prompt.start();

function gameFunction() {
    var numGenerator = Math.floor(Math.random() * 100);
    prompt.get("yourNumber", function (err, guessPrompt) {
        
        var myNumber = Number(guessPrompt.yourNumber);
        
        if (err) {
                console.log('there was an error');
        }
        else {
                if (myNumber === numGenerator) {
                    console.log("You win!");
                }
                
                else if (myNumber > numGenerator) {
                    console.log("Too high! You guessed " + myNumber + " and the correct number was " + numGenerator);
                    
                }
                else {
                    console.log("Too low! You guessed " + myNumber + " and the correct number was " + numGenerator);
                }
        }
    });
}

gameFunction();