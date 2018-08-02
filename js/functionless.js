'use strict';

// Create one huge multidimensional array that stores the first five questions and answers.

// You can also create an array of objects with key-value pairs.
// { question: answer }
// { q1: question, a1: answer, point: x }
// There are so many ways to do it!
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

// Store correct vs incorrect answers
let tally = {
  correct: 0,
  incorrect: 0
};

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
  if (sanitizedInput === questionsAndAnswers[1][j]) {
    tally.correct++;
    alert('Correct!');
  } else {
    tally.incorrect++;
    alert('Wrong!');
  }
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
    tally.correct++;
    break;
    // If the user enters a non-number value, they'll be prompted again.
  } else if (!guessingGame) {
    guessingGame = Number(prompt('Please enter a number. Can you guess how many countries I\'ve visited?'));
  } else if (guessingGame < countriesVisited.length) {
    guessingGame = Number(prompt('Guess higher...'));
    // Only increment attemps if they're valid inputs
    attempt++;
  } else if (guessingGame > countriesVisited.length) {
    guessingGame = Number(prompt('Guess lower...'));
    attempt++;
  }
}

// Answer is revealed after 4 failed attempts
if (attempt === 5) {
  alert(`I've been to ${countriesVisited.length} countries.`);
}



// Seventh question: ask user to guess which countries I've visited. There can be multiple correct answers. The user gets six tries to get one right.

// Joining, then adding a ', ' after the guess seems like a hack-y way to solve this. Is it better to iterate over the entire array in order to find a match?
let guessWhich = prompt('Can you guess a country I\'ve been to? Enter one country name per try.').toLowerCase() + ', ';
let tryNumber = 1;
const matchString = countriesVisited.join(', ').toLowerCase();

while (tryNumber < 7) {

  console.log(`Attempt ${tryNumber}: ${guessWhich}`);

  if (!matchString.includes(guessWhich)) {
    guessWhich = prompt('I haven\'t been there. Try again...').toLowerCase() + ', ';
  }

  if (matchString.includes(guessWhich)) {
    tally.correct++;
    alert(`That's right! ${guessWhich[0].toUpperCase() + guessWhich.slice(1)} was a lot of fun. You should check it out sometime.`);
    break;
  }

  tryNumber++;
}

// Upon using up the tries OR getting one right, all the possible answers display.
if (tryNumber === 7 || matchString.includes(guessWhich)) {
  const countriesUpToLast = countriesVisited.slice(0, countriesVisited.length-1);
  const lastCountry = ', and ' + countriesVisited[countriesVisited.length-1];

  // Test if I've correctly concatenated 'and'
  console.log(lastCountry);
  alert(`I've been to ${countriesUpToLast.join(', ') + lastCountry}. They were all really cool!`);
}

// Keep a tally of all the questions the user has gotten correct
alert(`You got ${tally.correct}/${tally.incorrect + tally.correct} on this quiz. Thanks for playing, ${userName}!!`);