"use strict";

let caseClass = document.querySelector('.case');

let green = Number(localStorage.getItem('green'));

let yellow = Number(localStorage.getItem('yellow'));

let red = Number(localStorage.getItem('red'));


let greenCase = document.querySelector('.green');
let yellowCase = document.querySelector('.yellow');
let redCase = document.querySelector('.red');

greenCase.setAttribute('class', 'active');