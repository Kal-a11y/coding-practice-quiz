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
let lostTime = false;
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
        } else if (lostTime){
            clearInterval(timerInterval);
            secondsLeft -= 5;
            timer.textContent = secondsLeft;
            lostTime = false;
            startTimer();
            return
        }
    },1000)
}

function quiz(){
    //Initial question shown
    showQuestion.q1();

    //For each answer conainer...
        for (let i = 0;i < answerContainter.length; i++){
            //When clicked change the question
            answerContainter[i].addEventListener('click', () =>{
                
                currentQuestionNum++;
                if (currentQuestionNum == 1){
                    showQuestion.q1();
                } else if (currentQuestionNum == 2){
                    showQuestion.q2();
                } else if (currentQuestionNum == 3){
                    showQuestion.q3();
                } else if (currentQuestionNum == 4){
                    showQuestion.q4();
                } else if (currentQuestionNum == 5){
                    showQuestion.q5();
                } else {
                    quizPassed();
                }
            })
            
        
    }
    

}

let showQuestion = {
    q1: function(){
        //Show question information
        questionNum.textContent = 1;
        questionText.textContent= testQuestions.q1.question;

        //Show answer information
        answer1.textContent = testQuestions.q1.correct;
            answer1.setAttribute('data-state','correct');
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
            answer3.setAttribute('data-state','correct');
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
            answer4.setAttribute('data-state','correct');
    },
    q4: function(){
        //Show question information
        questionNum.textContent = 4;
        questionText.textContent= testQuestions.q4.question;

        //Show answer information
        answer1.textContent = testQuestions.q4.correct;
            answer1.setAttribute('data-state','correct');
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
            answer2.setAttribute('data-state','correct');   
        answer3.textContent = testQuestions.q5.incorrect2;
        answer4.textContent = testQuestions.q5.incorrect3;
    },
}

//When the wrong answer is clicked remove time from timer

//delete code below when done

homeScreen.style.display = 'none';
gameScreen.style.display = 'block';

timer.textContent = secondsLeft;
startTimer();
quiz();