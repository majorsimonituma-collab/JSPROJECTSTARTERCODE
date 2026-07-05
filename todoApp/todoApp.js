'use strict'; 

const addBtn = document.getElementById("add-button");
const inputElement = document.getElementById("todo-input");
const display = document.querySelector(".container")

addBtn.addEventListener('click', function () {

    const todoItem = inputElement.value

    const heading = document.createElement("li");
    const todolist = document.createElement("ul");
    
    const headingText = document.createTextNode(todoItem);

    heading.appendChild(headingText);
    todolist.appendChild(heading);
    display.appendChild(todolist);


    document.body.appendChild(display);
});

function deletebtn () {
    const del = document.createTextNode("Delete");
    const DelBtn = document.createElement("button");

    DelBtn.appendChild(del);
    heading.appendChild(DelBtn);
};