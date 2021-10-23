"use strict";
const questions = [
    {
        question:"Sa biir moongi daw ?",
        check:["des fois", "Oui", "Non", "quatre"]
    }, { 
        question:"Sa bopp moongi metti ?",
        check:["-36 degrés", "+36 degrés", "36 degrés"]
    },{
        question:"Do jekki jekki di miir wala ngay xawa sukraat ?",
        check:["tres souvent", "rarement", "regulierement", "extra"]
    }
];

let red = 0, yellow = 0, green = 0;
function setAttributes(el, attrs) {
    for(var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
}
let creerCheck = function(checklabel, n){
    //label
    let labelTxt = document.createTextNode(checklabel);
    let label = document.createElement('label');
    label.setAttribute('for', `check${n}`);
    label.appendChild(labelTxt);

    //radio style
    let radioControl = document.createElement('div');
    radioControl.setAttribute('class', 'radio_control');
    radioControl.setAttribute('for', `check${n}`);
    let inputRadio = document.createElement('input');
    setAttributes(inputRadio, {'class':`check${n}`,'type':'radio', 'id':`check${n}`, 'name':'check', 'value':'value'})
    let divCheck = document.createElement('div');
    divCheck.setAttribute('class', 'check');
    let radioStyle = document.createElement('span');
    radioStyle.setAttribute('class', 'radio_style');

    radioStyle.appendChild(inputRadio);
    radioStyle.appendChild(radioControl);

    divCheck.appendChild(radioStyle);
    divCheck.appendChild(label);

    return divCheck;
}

let questionNum = 0;
let nextBtn = document.querySelector(".next");
let form = document.querySelector("form");
const questionsLength = questions.length

var titreQuestion = document.querySelector(".question h2");
let question = document.querySelector('.question p');
let indicator = document.querySelector('.next-button .indicator');

indicator.innerHTML = `${questionNum+1}/${questionsLength}`
titreQuestion.innerHTML = `Question ${questionNum + 1}`;

for(let i=0; i<questions[questionNum]["check"].length; i++){
    let label = questions[questionNum]["check"][i];
    let check = creerCheck(label, i+1);
    document.querySelector("form").appendChild(check);
    //console.log(form);
    //let choix = '.check'+(i+1);
    //let input = document.querySelector(choix);
}


question.innerHTML = questions[questionNum]["question"]
localStorage.clear()
nextBtn.addEventListener('click', function(){
    const rbs = document.querySelectorAll('input[name="check"]');
    let selectedValue;
    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.className;
            break;
        }
    }
    switch (selectedValue) {
        case "check1":
            green += 15;
            break;
        case "check2":
            yellow += 15;
            break;
        case "check3":
            red += 15
            break;
    }
    if (++questionNum <  questionsLength){ ;
        titreQuestion.innerHTML = `Question ${questionNum + 1}`;
        question.innerHTML = questions[questionNum]["question"];
        {
            console.log(form);
            for(let i=0; i<questions[questionNum]["check"].length; i++){
                let currentCheck = document.querySelector("form .check")
                let label = questions[questionNum]["check"][i];
                let check = creerCheck(label, i+1);
                form.removeChild(currentCheck);
                form.appendChild(check);
            }
        }

        indicator.innerHTML = `${questionNum+1}/${questionsLength}`
    }else{
        localStorage.setItem('green', green);
        localStorage.setItem('yellow', yellow);
        localStorage.setItem('red', red);
        alert("Vos reponses sont bien prise en compte!")
        window.location.pathname = "resultats.html";
        console.log(localStorage);
    }

})