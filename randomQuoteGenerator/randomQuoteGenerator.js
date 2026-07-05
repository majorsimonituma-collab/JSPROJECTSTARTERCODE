'use strict';

const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const button = document.getElementById("new-quote");

const quotes = [
    {quote: "The best way to predict the future is to create it.", 
        author: "Peter Drucker"
    },
    {quote: "Success is not final, failure is not fatal.",
        author: "Winston Churchill"
    },
    {quote: "Stay hungry. Stay foolish.",
        author: "Steve Jobs"
    },
    {quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {quote: "Give who give you, thief who thief you.",
        author: "vibekiller101"
    }
];

button.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);

    quoteText.textContent = quotes[randomIndex].quote;
    authorText.textContent = `- ${quotes[randomIndex].author}`;
});
