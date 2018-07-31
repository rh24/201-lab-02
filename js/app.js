"use strict";

// Design a guessing game about yourself in yes/no format

function aboutMe() {
    let bornInLa;
    let loveBagels;
    let brokenBone;
    let bingeWatch;
    let amazingBowler;

    function question1() {
        bornInLa = prompt('Was I born in Los Angeles County?').toLowerCase();
        console.log(bornInLa);
        // if (bornInLA === )
    }
    
    function question2() {
        loveBagels = prompt('Do I love bagels?').toLowerCase();
    }
    
    function question3() {
        brokenBone = prompt('Have I ever broken a bone?').toLowerCase();
    }
    
    function question4() {
        bingeWatch = prompt('Do I binge watch TV?').toLowerCase();
    }
    
    function question5() {
        amazingBowler = prompt('Am I an amazing bowler?').toLowerCase();
    }

    question1();
    // question2();
    // question3();
    // question4();
    // question5();
}


aboutMe();