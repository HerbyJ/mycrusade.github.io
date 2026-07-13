// ============================================
// My Crusade
// Daily Encouragement Quotes
// ============================================

const quotes = [

{
    text: "You don't have to see the whole path. Just take the next step.",
    author: "Unknown"
},

{
    text: "Every storm eventually runs out of rain.",
    author: "Unknown"
},

{
    text: "Small progress is still progress.",
    author: "Unknown"
},

{
    text: "You have survived 100% of your hardest days so far.",
    author: "Unknown"
},

{
    text: "Healing is rarely a straight line.",
    author: "Unknown"
},

{
    text: "One day, today's struggle will become someone else's hope.",
    author: "Unknown"
},

{
    text: "Rest is not quitting. Rest is preparing to continue.",
    author: "Unknown"
},

{
    text: "The sun still rises, even after the darkest night.",
    author: "Unknown"
},

{
    text: "You are allowed to begin again.",
    author: "Unknown"
},

{
    text: "Hope grows one decision at a time.",
    author: "Unknown"
},

{
    text: "Your value is not determined by your worst day.",
    author: "Unknown"
},

{
    text: "Keep going. Future you is counting on it.",
    author: "Unknown"
}

];

let previousIndex = -1;

// Pick a random quote that isn't the same as the previous one.
function randomQuote() {

    let index;

    do {

        index = Math.floor(Math.random() * quotes.length);

    } while (index === previousIndex && quotes.length > 1);

    previousIndex = index;

    return quotes[index];
}

// Update the quote on the page.
function displayQuote() {

    const quoteElement = document.getElementById("dailyQuote");

    if (!quoteElement)
        return;

    const quote = randomQuote();

    quoteElement.innerHTML = `
        <p>"${quote.text}"</p>
        <footer>— ${quote.author}</footer>
    `;

}

// Initialize once the page has loaded.
document.addEventListener("DOMContentLoaded", () => {

    displayQuote();

    const button = document.getElementById("newQuoteButton");

    if (button) {

        button.addEventListener("click", displayQuote);

    }

});