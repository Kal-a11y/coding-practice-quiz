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

//Answers
let answer1 = document.querySelector('#answer-1');
let answer2 = document.querySelector('#answer-2');
let answer3 = document.querySelector('#answer-3');
let answer4 = document.querySelector('#answer-4');

//Click start quiz button
startBtn.addEventListener('click',() => {
    
    homeScreen.style.display = 'none';
    gameScreen.style.display = 'block';
})