'use strict';

// Create one huge multidimensional array that stores the first five questions and answers.
const questionsAndAnswers = [
  [
    'Was I born in Los Angeles County',
    'Do I love bagels',
    'Have I ever broken a bone',
    'Do I binge watch TV',
    'Am I an amazing bowler'
  ],
  [
    'no',
    'yes',
    'no',
    'yes',
    'no'
  ]
];

// Acceptable answers
const validInputs = ['yes', 'no', 'y', 'n'];

// Variable to store sanitized version of user's input
let sanitizedInput;

// Greet the user
const userName = prompt('What\'s your name ?');
alert(`Hey, ${userName}. Thanks for visiting my About Me page.`);

// Ask user questions about me
for (let j = 0; j < questionsAndAnswers[0].length; j++) {
  let userInput = prompt(questionsAndAnswers[0][j] + '?').toLowerCase();

  if (userInput === 'y' || userInput === 'yes') {
    sanitizedInput = 'yes';
    console.log('User answer: ' + sanitizedInput);
  } else if (userInput === 'n' || userInput === 'no') {
    sanitizedInput = 'no';
    console.log('User answer: ' + sanitizedInput);
  } else {
    while (!validInputs.includes(userInput)) {
      alert('Please, enter Y/N or YES/NO.');
      userInput = prompt(questionsAndAnswers[0][j] + '?').toLowerCase();
    }
  }

  // Alert users if they got the right or wrong answer
  sanitizedInput === questionsAndAnswers[1][j] ? alert('Correct!') : alert('Wrong!');
}

// Sixth question:
// Ask the user a numeric guessing game that accepts exactly 4 guesses.

const countriesVisited = [
  'New Zealand',
  'Mexico',
  'Canada',
  'Phillippines',
  'Taiwan',
  'China',
  'Malaysia',
  'Singapore',
  'India',
  'Korea',
  'Thailand',
  'Indonesia',
  'Nepal',
  'Denmark',
  'Germany',
  'Netherlands',
  'France',
  'Croatia',
  'Portugal',
  'Sweden',
  'Spain',
  'UK',
  'Dominican Republic'
];

// This is the first attempt
let guessingGame = Number(prompt('Can you guess how many countries I\'ve visited?'));

// Continuation of user attempts
let attempt = 2;

while (attempt < 5) {
  if (guessingGame === countriesVisited.length) {
    alert('Correct!');
    // If the user enters a non-number value, they'll be prompted again.
    break;
  } else if (!guessingGame) {
    guessingGame = Number(prompt('Please enter a number. Can you guess how many countries I\'ve visited?'));
  } else {
    guessingGame = Number(prompt('Try again! Can you guess how many countries I\'ve visited?'));
    attempt++;
  }
}

// Answer is revealed after 4 failed attempts
if (attempt === 5) {
  alert(`I've been to ${countriesVisited.length} countries.`);
}


