'use strict';
console.log('the js is working!');

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

// Store correct vs incorrect answers
const tally = {
  correct: 0,
  incorrect: 0
};

const greetUser = () => {
  // Greet the user
  const userName = prompt('What\'s your name ?');
  alert(`Hey, ${userName}. Thanks for visiting my About Me page.`);
  return userName;
};


const askQuestions = () => {
  // Acceptable answers
  const validInputs = ['yes', 'no', 'y', 'n'];

  // Variable to store sanitized version of user's input
  let sanitizedInput;

  // Ask user questions about me
  for (let j = 0; j < questionsAndAnswers[0].length; j++) {
    let userInput = prompt(questionsAndAnswers[0][j] + '?').toLowerCase();

    if (userInput === 'y' || userInput === 'yes') {
      sanitizedInput = 'yes';
    } else if (userInput === 'n' || userInput === 'no') {
      sanitizedInput = 'no';
    } else {
      while (!validInputs.includes(userInput)) {
        alert('Please, enter Y/N or YES/NO.');
        userInput = prompt(questionsAndAnswers[0][j] + '?').toLowerCase();
      }
      console.log('User answer: ' + sanitizedInput);
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
};

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

const guessNumber = () => {
  // This is the first attempt
  let guessingGame = Number(prompt('Can you guess how many countries I\'ve visited?'));
  let message;

  // Continuation of user attempts
  let attempt = 2;

  while (attempt < 5) {
    if (guessingGame === countriesVisited.length) {
      alert('Correct!');
      tally.correct++;
      break;
      // If the user enters a non-number value, they'll be prompted again.
    } else if (!guessingGame) {
      message = 'Please enter a number. Can you guess how many countries I\'ve visited?';
    } else if (guessingGame < countriesVisited.length) {
      message = 'Guess higher...';
      // Only increment attemps if they're valid inputs
      attempt++;
    } else if (guessingGame > countriesVisited.length) {
      message = 'Guess lower...';
      attempt++;
    }

    guessingGame = Number(prompt(message));
  }

  // Answer is revealed after 4 failed attempts
  if (attempt === 5) {
    alert(`I've been to ${countriesVisited.length} countries.`);
    tally.incorrect++;
  }
};

let tryNumber = 1;

// Seventh question: ask user to guess which countries I've visited. There can be multiple correct answers. The user gets six tries to get one right.
const guessCountry = (userName) => {
  let guessWhich = prompt('Can you guess a country I\'ve been to? Enter one country name per try.').toLowerCase();
  const lowerCaseCountries = [];

  // Create an array of lower-cased countries
  for (let i = 0; i < countriesVisited.length; i++) {
    lowerCaseCountries.push(countriesVisited[i].toLowerCase());
  }

  while (!lowerCaseCountries.includes(guessWhich) || tryNumber < 7) {
    console.log(`Attempt ${tryNumber}: ${guessWhich}`);

    if (tryNumber === 7) {
      displayAllCountries();
      break;
    }

    if (guessWhich.replace(/ /g,'') === '') {
      guessWhich = prompt('Play the game!');
    } else if (lowerCaseCountries.includes(guessWhich)) {
      tally.correct++;
      alert(`That's right! ${guessWhich[0].toUpperCase() + guessWhich.slice(1)} was a lot of fun. You should check it out sometime.`);
      displayAllCountries();
      break;
    } else {
      guessWhich = prompt('I haven\'t been there. Try again...').toLowerCase();
      tryNumber++;
    }
  }

  function displayAllCountries() {
    // Upon using up the tries OR getting one right, all the possible answers display.
    const countriesUpToLast = countriesVisited.slice(0, countriesVisited.length-1);
    const lastCountry = ', and ' + countriesVisited[countriesVisited.length-1];
    tally.incorrect++;

    // Test if I've correctly concatenated 'and'
    console.log(lastCountry);
    alert(`I've been to ${countriesUpToLast.join(', ') + lastCountry}. They were all really cool!`);

    // Keep a tally of all the questions the user has gotten correct
    alert(`You got ${tally.correct}/${tally.incorrect + tally.correct} on this quiz. Thanks for playing, ${userName}!!`);
    return;
  }
};


let user = greetUser();
askQuestions();
guessNumber();
guessCountry(user);