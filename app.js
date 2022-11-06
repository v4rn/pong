// contants
const FRAME_SPEED = 500;

// global vars
let animation_event;
let start_btn;
let pause_btn;
let reset_btn;
let canvas_wrapper;

function init() {
    canvas_wrapper = CanvasWrapper();

    // init btn vars
    start_btn = document.getElementById("start_button");
    pause_btn = document.getElementById("pause_button");
    reset_btn = document.getElementById("reset_button");
}

function start_game() {
    console.log("starting world!");
    start_btn.disabled = true;
    pause_btn.disabled = false;
    reset_btn.disabled = true;
    // animate
    animation_event = setInterval(() => world.incr_world(), FRAME_SPEED);
}

function pause_game() {
    console.log("stoping world!");
    start_btn.disabled = false;
    pause_btn.disabled = true;
    reset_btn.disabled = false;
    // remove animation
    clearInterval(animation_event);
}

function reset_game() {
    console.log("clearing world!");
}
