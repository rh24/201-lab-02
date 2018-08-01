'use strict';

// Design a guessing game about yourself in yes/no format

function aboutMe () {
  let bornInLa;
  let loveBagels;
  let brokenBone;
  let bingeWatch;
  let amazingBowler;
  let valid;
  let translatedInput;
  // WHy would I declare these variables here and not inside my questions?
  // If in the future, I want to access these variables outside of the question functions scope, these variables must be declared outside of the inner functions' scope. However, I may not want the global execution context to have access to these variables. That's why I use a closure.

  // Another way to write this function is with a switch statement.
  function validInput (input) {
    if (input.toLowerCase() === 'yes'|| input.toLowerCase() === 'y') {
      valid = true;
      translatedInput = 'yes';
    } else if (input.toLowerCase() === 'no' || input.toLowerCase() === 'n') {
      valid = true;
      translatedInput = 'no';
    } else {
      valid = false;
      alert('This is a yes or no question.');
    }
  }

  function question1 () {
    bornInLa = prompt('Was I born in Los Angeles County?').toLowerCase();

    validInput(bornInLa);
    console.log('Valid response:', valid);
    console.log('Answer:', bornInLa);

    if (!valid) {
      question1();
    } else if (translatedInput === 'yes') {
      alert('You\'re wrong! I was born in NYC in the borough of Queens.');
    } else if (translatedInput === 'no') {
      alert('Correct! I was actually born in Flushing, NY.');
    }
  }

  function question2 () {
    loveBagels = prompt('Do I love bagels?').toLowerCase();

    validInput(loveBagels);
    console.log('Valid response:', valid);
    console.log('Answer:', loveBagels);

    if (!valid) {
      question2();
    } else if (translatedInput === 'yes') {
      alert('YES! UNEQUIVOCALLY, YES!');
    } else if (translatedInput === 'no') {
      alert('That\'s blasphemy for a New Yorker. We love bagels!');
    }
  }

  function question3 () {
    brokenBone = prompt('Have I ever broken a bone?').toLowerCase();

    validInput(brokenBone);
    console.log('Valid response:', valid);
    console.log('Answer:', brokenBone);

    if (!valid) {
      question3();
    } else if (translatedInput === 'yes') {
      alert('Wrong! I\'ve been lucky!');
    } else if (translatedInput === 'no') {
      alert('Correct! Knock on wood, I\'ve never broken a bone.');
    }
  }

  function question4 () {
    bingeWatch = prompt('Do I binge watch TV?').toLowerCase();

    validInput(bingeWatch);
    console.log('Valid response:', valid);
    console.log('Answer:', bingeWatch);

    if (!valid) {
      question4();
    } else if (translatedInput === 'yes') {
      alert('Definitely, yes. "This Is Us" and "Orange Is The New Black" are the most bingeworthy.');
    } else if (translatedInput === 'no') {
      alert('Incorrect. I need to know what happens next!');
    }
  }

  function question5 () {
    amazingBowler = prompt('Am I an amazing bowler?').toLowerCase();

    validInput(amazingBowler);
    console.log('Valid response:', valid);
    console.log('Answer:', amazingBowler);

    if (!valid) {
      question5();
    } else if (translatedInput === 'yes') {
      alert('Hahaha. I usually bowl < 50. Amazing? More like amazingly bad.');
    } else if (translatedInput === 'no') {
      alert('You are correct!');
    }
  }

  question1();
  question2();
  question3();
  question4();
  question5();
}

aboutMe();