'use strict';

// Design a guessing game about yourself in yes/no format

function aboutMe () {
  let bornInLa;
  let loveBagels;
  let brokenBone;
  let bingeWatch;
  let amazingBowler;
  let valid;

  function validInput (input) {
    if (input.toLowerCase() === 'yes' || input.toLowerCase() === 'no') {
      valid = true;
    } else {
      valid = false;
      alert('This is a yes or no question.');
    }
  }

  function question1 () {
    bornInLa = prompt('Was I born in Los Angeles County?').toLowerCase();

    validInput(bornInLa);

    if (!valid) {
      question1();
    } else if (bornInLa === 'yes') {
      alert('You\'re wrong! I was born in NYC in the borough of Queens.');
    } else if (bornInLa === 'no') {
      alert('Correct! I was actually born in Flushing, NY.');
    }
  }

  function question2 () {
    loveBagels = prompt('Do I love bagels?').toLowerCase();

    if (!valid) {
      question2();
    } else if (loveBagels === 'yes') {
      alert('YES! UNEQUIVOCALLY, YES!');
    } else if (loveBagels === 'no') {
      alert('That\'s blasphemy for a New Yorker. We love bagels!');
    }
  }

  function question3 () {
    brokenBone = prompt('Have I ever broken a bone?').toLowerCase();

    if (!valid) {
      question3();
    } else if (brokenBone === 'yes') {
      alert('Wrong! I\'ve been lucky!');
    } else if (brokenBone === 'no') {
      alert('Correct! Knock on wood, I\'ve never broken a bone.');
    }
  }

  function question4 () {
    bingeWatch = prompt('Do I binge watch TV?').toLowerCase();

    if (!valid) {
      question4();
    } else if (bingeWatch === 'yes') {
      alert('Definitely, yes. "This Is Us" and "Orange Is The New Black" are the most bingeworthy.');
    } else if (bingeWatch === 'no') {
      alert('Incorrect. I need to know what happens next!');
    }
  }

  function question5 () {
    amazingBowler = prompt('Am I an amazing bowler?').toLowerCase();

    if (!valid) {
      question5();
    } else if (amazingBowler === 'yes') {
      alert('Hahaha. I usually bowl < 50. Amazing? More like amazingly bad.');
    } else if (amazingBowler === 'no') {
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
