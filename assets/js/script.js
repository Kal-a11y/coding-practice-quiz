import {
    testQuestions,
} from './questions.js';

//Screens
let homeScreen = document.querySelector('main');
let gameScreen = document.querySelector('#game-view')

//buttons
let startBtn = document.querySelector('#start-btn');
let scoreBtn = document.querySelector('#score-btn');

//Question
let questionNum = document.querySelector('#question-num')
let questionText = document.querySelector('#question-text');
let timer = document.querySelector('#timer');

//Answers
let answer1 = document.querySelector('#answer-1');
let answer2 = document.querySelector('#answer-2');
let answer3 = document.querySelector('#answer-3');
let answer4 = document.querySelector('#answer-4');
let answerContainter = document.querySelectorAll('.answer'); //all answers

//global variables
let secondsLeft = 60;
let quizInProgress = true;
let currentQuestionNum = 1;

//Click start quiz button
startBtn.addEventListener('click',() => {
    
    homeScreen.style.display = 'none';
    gameScreen.style.display = 'block';

    timer.textContent = secondsLeft;
    startTimer();
    quiz();
})

function startTimer() {
    let timerInterval = setInterval(() =>{
        secondsLeft--;
        timer.textContent = secondsLeft;

        if (secondsLeft === 0 && quizInProgress){
            clearInterval(timerInterval);
            quizFailed();
        }
    },1000)
}

function quiz(){
    showQuestion.q1();

}

let showQuestion = {
    q1: function(){
        //Show question information
        questionNum.textContent = 1;
        questionText.textContent= testQuestions.q1.question;

        //Show answer information
        answer1.textContent = testQuestions.q1.correct;
        answer2.textContent = testQuestions.q1.incorrect1;
        answer3.textContent = testQuestions.q1.incorrect2;
        answer4.textContent = testQuestions.q1.incorrect3;
    },
    q2: function(){
        //Show question information
        questionNum.textContent = 2;
        questionText.textContent= testQuestions.q2.question;

        //Show answer information
        answer1.textContent = testQuestions.q2.incorrect2;
        answer2.textContent = testQuestions.q2.incorrect1;
        answer3.textContent = testQuestions.q2.correct;
        answer4.textContent = testQuestions.q2.incorrect3;
    },
    q3: function(){
        //Show question information
        questionNum.textContent = 3;
        questionText.textContent= testQuestions.q3.question;

        //Show answer information
        answer1.textContent = testQuestions.q3.incorrect3;
        answer2.textContent = testQuestions.q3.incorrect1;
        answer3.textContent = testQuestions.q3.incorrect2;
        answer4.textContent = testQuestions.q3.correct;
    },
    q4: function(){
        //Show question information
        questionNum.textContent = 4;
        questionText.textContent= testQuestions.q4.question;

        //Show answer information
        answer1.textContent = testQuestions.q4.correct;
        answer2.textContent = testQuestions.q4.incorrect1;
        answer3.textContent = testQuestions.q4.incorrect2;
        answer4.textContent = testQuestions.q4.incorrect3;
    },
    q5: function(){
        //Show question information
        questionNum.textContent = 5;
        questionText.textContent= testQuestions.q5.question;

        //Show answer information
        answer1.textContent = testQuestions.q5.incorrect1;
        answer2.textContent = testQuestions.q5.correct;
        answer3.textContent = testQuestions.q5.incorrect2;
        answer4.textContent = testQuestions.q5.incorrect3;
    },
}
//When any answer is clicked move to the next question
    //create an onclick for .answer to change current question num

//When the wrong answer is clicked remove time from timer

//delete code below when done

homeScreen.style.display = 'none';
gameScreen.style.display = 'block';

timer.textContent = secondsLeft;
startTimer();
quiz();