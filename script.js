const validChoices = ["r", "p", "s"];

function getUserInput() {
  let isValid = false;
  let userChoice = prompt("Choose R, P, or S").toLowerCase();
  isValid = isChoiceValid(userChoice);
  while(isValid === false) {
    alert("That choice is invalid. Please try again.");
    userChoice = prompt("Choose ONLY R, P, or S").toLowerCase();
    isValid = isChoiceValid(userChoice);
  }
  return userChoice;
}

function getComputerChoice() {
  let index = Math.floor(Math.random() * 3);
  let computerChoice = validChoices[index];
  console.log(computerChoice);
  return computerChoice;
}

function isChoiceValid(choice) {
  return validChoices.includes(choice);
}

// write an overall game outcome function
//  tie: if both sides choose same choice
//  win: if user picks rock they win if computer picks scissors
//  win: if user picks scissors they win if computer picks paper
//  win: if user picks paper they win if computer picks rock
//  loss: else

// write function to ask user if they want to continue playing
// use confirm() to get user choice

// create something that tracks total wins, ties, and losses (variables or object)

// create function to store how many times I choose each option

getUserInput();
getComputerChoice();