// In this file, write a program that will let the user play hangman. 

//The program should work as follows:
// Choose a random word from a list of words.
// In a loop, do the following:
// Ask the user to guess a letter
// If the user guessed a wrong letter, then add one step to the hangman "drawing"
// Display the current completion of the word next to a hangman ASCII "drawing". You can get some inspiration from either here or here
// Keep looping until either the word is found or the hangman is hanged!
// Display a message to the user letting them know what happened
// Save/commit/push

var prompt = require('prompt');
prompt.start();
var randomWordArray = ["cash", "money", "argent"];

// Ascii hangman array
var hangman = [
    "   _______",
    "  |/      |",
    "  |      (_)",    
    "  |      \\|/",    
    "  |       |",    
    "  |      / \\",
    "  |",
    " _|___"
    ];

var numGenerator = Math.floor(Math.random() * randomWordArray.length);

prompt.get("letterGuess", function (err, guessPrompt) {
        
        if (err) {
                console.log('there was an error');
        }
        else {
               
        }