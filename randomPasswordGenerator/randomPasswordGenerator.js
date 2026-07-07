'use strict';


//Saving Variables from Style.css
const Input = document.getElementById('length-input');
const GenBtn = document.getElementById('generate-btn');
const display = document.getElementById('password-output');
const UpperInput = document.getElementById('uppercase-input');
const LowerInput = document.getElementById('lowercase-input');
const NumInput= document.getElementById('numbers-input');
const SymInput = document.getElementById('symbols-input');
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
const numbers = "0123456789".split("");
const symbols = "!@#$%^&*()".split("");

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

    let characters = [];

        if (UpperInput.checked) {
            for (let i = 0; i < uppercase.length; i++) {
                characters.push(uppercase[i]);
            }
        }

        if (LowerInput.checked) {
            for (let i = 0; i < lowercase.length; i++) {
                characters.push(lowercase[i]);
            }
        }

        if (NumInput.checked) {
            for (let i = 0; i < numbers.length; i++) {
                characters.push(numbers[i]);
            }
        }

        if (SymInput.checked) {
            for (let i = 0; i < symbols.length; i++) {
                characters.push(symbols[i]);
            }
        }

        let password = "";

        for (let i = 0; i < Number(Input.value); i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password += characters[randomIndex];
        }

        display.textContent = password;

        console.log(password);
};






