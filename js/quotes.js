// ============================================
// My Crusade
// Quote System
// Loads quotes from data/quotes.json
// ============================================

let quotes = [];

let previousIndex = -1;


// Load quotes from JSON
async function initializeQuotes() {

    quotes = await loadData("data/quotes.json");

    if (quotes.length > 0) {

        displayQuote();

    }

}


// Select random quote
function randomQuote() {

    let index;

    do {

        index = Math.floor(Math.random() * quotes.length);

    } while (index === previousIndex && quotes.length > 1);


    previousIndex = index;

    return quotes[index];

}


// Display quote
function displayQuote() {

    const quoteElement = document.getElementById("dailyQuote");

    if (!quoteElement || quotes.length === 0) {

        return;

    }


    const quote = randomQuote();


    quoteElement.innerHTML = `

        <p class="quote-text">
            "${quote.text}"
        </p>

        <p class="quote-author">
            — ${quote.author}
        </p>

    `;

}


// Initialize
document.addEventListener("DOMContentLoaded", () => {

    initializeQuotes();


    const button = document.getElementById("newQuoteButton");


    if (button) {

        button.addEventListener("click", () => {

            displayQuote();

        });

    }

});