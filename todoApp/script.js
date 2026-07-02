'use strict';

const addBtn = document.querySelector("#add-button");

function paragraph() {
                let heading = document.createElement("p");
                const headingText = document.createTextNode("This is a New Paragraph!");
                heading.appendChild(headingText);

                document.body.appendChild(heading);
            };
