const { maxHeaderSize } = require("http");
const { exit } = require("process");
const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

let min = 1;
let max = 100;
function randomInteger(min, max) {
  let range = max - min + 1;
  return Math.floor(Math.random() * range + min)}

// randomInteger is computer's answer, between 1 and 100
start();

// need to get computer to generate a number

async function start() {
  console.log(
    "Let's play a game where I (computer) make up a number and you (human) try to guess it. Okay, I have my number, start guessing!"
  ); 
  let compAnswer = randomInteger (min,max)
    compAnswer = +compAnswer
   // console.log(+compAnswer);
    // run function of randomInt - this is the computer's answer
  
    let guessOne = await ask("What is your first guess of my number!?\n"
    );
        if (guessOne > +compAnswer) {  // if the right number is lower than the guess, user guesses again
            console.log("No, my number is lower, guess again.")
        }
        else if (guessOne < +compAnswer) { // if the right number is higher than the guess, user guesses again
            console.log("No, my number is higher, guess again.")
        };
  
    while (true) {
    //running the while loop to keep asking questions until the answer is yes
        let guessTwo = await ask("What's your next guess?\n");
        if (guessTwo == +compAnswer) {
            console.log("Hooray! You won! You guessed " + compAnswer + "!")
            process.exit();
        } else if 
            (guessTwo > +compAnswer) {
            console.log("No, my number is lower, guess again.")
            
        }else if 
            (guessTwo < +compAnswer) {
                console.log("No, my number is higher, guess again.")
            };  
}}
// if the guess is equal to the value, the human wins! 