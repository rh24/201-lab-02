'use strict';

// Design a guessing game about yourself in yes/no format

function aboutMe () {
  let valid;
  let sanitizedInput;
  // Why would I declare these variables here and not inside my questions?
  // If in the future, I want to access these variables outside of the question functions scope, these variables must be declared outside of the inner functions' scope. However, I may not want the global execution context to have access to these variables. That's why I use a closure.

  // Another way to write this function is with a switch statement.
  // Refactor by having a single question function that has one paramater: it accepts a question as an argument.
  const questionsAndAnswers = [
    { q: 'Was I born in LA County', a: 'no', y: 'You\'re wrong! I was born in NYC in the borough of Queens.', n: 'Correct! I was actually born in Flushing, NY.' },
    { q: 'Do I love bagels', a: 'yes', y: 'YES! UNEQUIVOCALLY, YES!', n: 'That\'s blasphemy for a New Yorker. We love bagels!' },
    { q: 'Have I ever broken a bone', a: 'no', y: 'Wrong! I\'ve been lucky!', n: 'Correct! Knock on wood, I\'ve never broken a bone.' },
    { q: 'Do I binge watch TV', a: 'yes', y: 'Definitely, yes. "This Is Us" and "Orange Is The New Black" are the most bingeworthy.', n: 'Incorrect! I need to know what happens next.' },
    { q: 'Am I an amazing bowler', a: 'no', y: 'Hahaha. I usually bowl < 50. Amazing? More like amazingly bad.', n: 'You are correct!' }
  ];
  const validInputs = ['yes', 'y', 'no', 'n'];
  let userInput;

  function askQuestions() {
    for (let dataSet of questionsAndAnswers) {
      userInput = prompt(dataSet['q']);
      while (!valid) {
        validInput(userInput, dataSet['q']);
      }

      if (sanitizedInput === 'yes') {
        alert(dataSet['y']);
      } else {
        alert(dataSet['n']);
      }
    }
  }

  function validInput(input, question) {
    let lowerCased = input.toLowerCase();

    if (!validInputs.includes(lowerCased)) {
      valid = false;
      userInput = prompt(`This is a yes or no question. ${question}`);
    } else if (lowerCased === 'yes'|| lowerCased === 'y') {
      valid = true;
      sanitizedInput = 'yes';
    } else if (lowerCased === 'no' || lowerCased === 'n') {
      valid = true;
      sanitizedInput = 'no';
    }
  }

  askQuestions();
}

aboutMe();

// Try another solution:
// Use variables for each question and answer. Make arrays for each question and answer. Have a prompt question function to iterate over each array.
