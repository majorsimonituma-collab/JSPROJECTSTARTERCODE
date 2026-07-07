'use strict';


//Saving Variables from Style.css
const Input = document.getElementById('length-input');
const GenBtn = document.getElementById('generate-btn');
const display = document.getElementById('password-output');
const UpperInput = document.getElementById('uppercase-input');
const LowerInput = document.getElementById('lowercase-input');
const NumInput= document.getElementById('numbers-input');
const SymInput = document.getElementById('symbols-input');
const passWord = document.getElementById('password-output')








GenBtn.addEventListener('click', () => {
    generatepassword();
});

function generatepassword () {


    if (!Input.value) {
        alert('Input value');

    } else if  (Input.value < 8 || Input.value > 32) {
                alert('Input is less than minimum value or more than maximum');
    } else if (!UpperInput.checked && !LowerInput.checked && !NumInput.checked && !SymInput.checked) {
        alert('Tick atleast one box')
    };

    for (let i = 0; i < Input; i++) {
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        passwordgen += allCharacters[randomIndex];
    }
};

// console.log(passwordgen);