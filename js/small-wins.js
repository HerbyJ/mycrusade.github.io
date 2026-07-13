// ======================================
// My Crusade
// Small Wins Generator
// Loads from data/small-wins.json
// ======================================

let smallWins = [];


// Load small wins
async function initializeSmallWins() {

    smallWins = await loadData("data/small-wins.json");

    if (smallWins.length > 0) {

        displaySmallWins();

    }

}


// Display random ideas
function displaySmallWins() {

    const list = document.getElementById("smallWinsList");

    if (!list || smallWins.length === 0) {

        return;

    }


    list.innerHTML = "";


    const shuffled = [...smallWins]
        .sort(() => Math.random() - 0.5);


    const selected = shuffled.slice(0, 5);


    selected.forEach(win => {

        const item = document.createElement("li");

        item.textContent = win.text;

        list.appendChild(item);

    });

}


// Start system
document.addEventListener("DOMContentLoaded", () => {

    initializeSmallWins();


    const button = document.getElementById(
        "newSmallWinsButton"
    );


    if (button) {

        button.addEventListener(
            "click",
            displaySmallWins
        );

    }

});