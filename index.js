const { maxHeaderSize } = require("http");
const { exit } = require("process");
const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}
let count = 0;

function randomInteger(min, max) {
  let range = max - min + 1;
  return Math.floor(Math.random() * range + min);
  // if it's higher, comp asks for a higher number than the previous one
  // run the while loop in order to keep asking the same question until we get a Yes returned,
  // then the program exits & says "hooray"
}

start();

// need to get computer to guess a number

async function start() {
  // let min = 1;
  // let max = 100;
  console.log(
    "Let's play a game where you (human) make up a number and I (computer) try to guess it."
  );
  let secretNumber = await ask(
    "What is your secret number?\nI won't peek, I promise...\n"
  );
  console.log("You entered: " + secretNumber);
  // ${secretNumber} = answer  // the answer the computer is trying to guess
  max = await ask(
    // do i add parseInt or Number() to change the input into
    "What is the max your number could be?\n"
  );
  max = +max;
  min = 0;

  let questionOne = await ask(
    "is your number a random number between " + min + " and " + max + "?\n"
  );
  if (
    questionOne === "n" ||
    questionOne === " n" ||
    questionOne === "no" ||
    questionOne === " no" ||
    questionOne === "No"
  ) {
    let secretNumber = await ask("Pick a new secret number\n");
  }
  while (true) {
    // counter
    count = count + 1;
    //running the while loop to keep asking questions until the answer is yes
    let guess = Math.floor((max + min) / 2); // to make the guess smarter, guesses the halfway point between the range and round down
    let questionTwo = await ask("Is your number " + guess + "?\n");
    if (
      questionTwo === "yes" ||
      questionTwo === " yes" ||
      questionTwo === "Yes" ||
      questionTwo === "y" ||
      questionTwo === "yes!"
    ) {
      //add more
     
      let finalQuestion = await ask("I won! Hooray! that took me " +count + " guesses! Do you want to play again?\n");
        if (finalQuestion === "yes") {
          start();
        } else if (finalQuestion === "no"){
      process.exit();}
    } else {
      let questionThree = await ask("Is it higher or lower?\n");
      if (questionThree === "H" || questionThree === "h") {
        // if they choose higher, the min becomes the last guess
        min = guess;
      } else if (questionThree === "L" || questionThree === "l") {
        // if they choose lower, the max becomes the last guess
        max = guess;
      } else if (finalQuestion === "no" && secretNumber === guess) {
            console.log("excuse me, that's cheating!")
            process.exit();
      }
      
    } 
    

    
  }
}
