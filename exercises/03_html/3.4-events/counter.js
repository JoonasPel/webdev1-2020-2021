const btn_inc = document.getElementById("increment");
const btn_dec = document.getElementById("decrement");
const btn_rst = document.getElementById("reset");
const counter = document.getElementById("counter");

var x = 0;
var max_value = 5;
var min_value = -5;
var reset_value = 0;

function incrementer() {
    if(x==max_value) {
        x=min_value;
    } else {
        ++x;
    }
    console.log("Click");
    counter.textContent = x;
}

function reseter() {
    x = reset_value;
    console.log("Reset");
    counter.textContent = reset_value;
}

function decreaser() {
    if(x==min_value) {
        x=max_value;
    } else {
        --x;
    }
    console.log("Reset");
    counter.textContent = x;
}


btn_inc.addEventListener("click", incrementer);
btn_rst.addEventListener("click", reseter);
btn_dec.addEventListener("click", decreaser);