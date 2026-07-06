'use strict'; 

const addBtn = document.getElementById("add-button");
const inputElement = document.getElementById("todo-input");
const display = document.querySelector(".container")

addBtn.addEventListener('click', function (e) {

    e.preventDefault();

    const todoItem = inputElement.value

    const heading = document.createElement("li");
    const todolist = document.createElement("ul");
    
    const headingText = document.createTextNode(todoItem);

    heading.appendChild(headingText);
    todolist.appendChild(heading);
    display.appendChild(todolist);


    document.body.appendChild(display);

    const DelBtn = document.createElement("button");
    const del = document.createTextNode("Delete");
    

    DelBtn.appendChild(del);
    heading.appendChild(DelBtn);

    DelBtn.addEventListener('click', () => {
        heading.removeChild(headingText);
        todolist.removeChild(heading);
        display.removeChild(todolist);

    });

});

