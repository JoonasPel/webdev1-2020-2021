//eventlistener for button
document.getElementById("roll-button").addEventListener('click', rollDice);

//total rolls
const total_rolls = document.getElementById("totals").querySelector("span");

//counters
const counter_one = document.getElementById("ones").querySelector("p");
const counter_two = document.getElementById("twos").querySelector("p");
const counter_three = document.getElementById("threes").querySelector("p");
const counter_four = document.getElementById("fours").querySelector("p");
const counter_five = document.getElementById("fives").querySelector("p");
const counter_six = document.getElementById("sixes").querySelector("p");

//roll-button image
const button_span = document.getElementById("roll-button").querySelector("span");

//eventlistener for custom event "rollDice"
document.addEventListener('rollDice', function (event) {
    console.log(event.detail.value);

    total_rolls.textContent++;

    switch (event.detail.value) {
        case 1:
            incrementer(counter_one);
            change_image("&#9856;");
            break;
        case 2:
            incrementer(counter_two);
            change_image("&#9857;");
            break;
        case 3:
            incrementer(counter_three);
            change_image("&#9858;");
            break;
        case 4:
            incrementer(counter_four);
            change_image("&#9859;");
            break;
        case 5:
            incrementer(counter_five);
            change_image("&#9860;");
            break;
        case 6:
            incrementer(counter_six);
            change_image("&#9861;");
            break;
        default:
        console.log("nopan antama arvo on ei ole 1-6");
    }
});

function incrementer(counter) {
    if(counter.textContent === "-") {
        counter.textContent = 1;
    } else {
        counter.textContent++;
    }
}

function change_image(new_content) {
    button_span.innerHTML = new_content;
}