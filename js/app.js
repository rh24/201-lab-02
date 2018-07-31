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

    if (!validInput(bornInLa)) {
      alert('This is a yes or no question.');
      question1();
    } else if (bornInLa === 'yes') {
      alert('You\'re wrong! I was born in NYC in the borough of Queens.');
    } else if (bornInLa === 'no') {
      alert('Correct! I was actually born in Flushing, NY.');
    }
  }

  function question3 () {
    brokenBone = prompt('Have I ever broken a bone?').toLowerCase();
  }

  function question4 () {
    bingeWatch = prompt('Do I binge watch TV?').toLowerCase();
  }

  function question5 () {
    amazingBowler = prompt('Am I an amazing bowler?').toLowerCase();
  }

  question1();
  // question2();
  // question3();
  // question4();
  // question5();
}

aboutMe();
