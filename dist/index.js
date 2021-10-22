"use strict";
const questions = ["Sa biir moongi daw ?", "Sa bopp moongi metti ?", "Do jekki jekki di miir wala ngay xawa sukraat ?"];

let questionNum = 0;
let nextBtn = document.querySelector(".next");

const questionsLength = questions.length
var titreQuestion = document.querySelector(".question h2");
let question = document.querySelector('.question p');
let indicator = document.querySelector('.next-button .indicator');

indicator.innerHTML = `${questionNum+1}/${questionsLength}`
titreQuestion.innerHTML = `Question ${questionNum + 1}`;
question.innerHTML = questions[questionNum]

nextBtn.addEventListener('click', function(){
    if (++questionNum <  questionsLength){ 
        titreQuestion.innerHTML = `Question ${questionNum + 1}`;
        question.innerHTML = questions[questionNum];
        indicator.innerHTML = `${questionNum+1}/${questionsLength}`
    }else{
        alert("Dawal fadjou dji")
    }
})