// contants
const FRAME_SPEED = 50;
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 500;
const CELL_UNIT = 4;

// global vars
let animation_event;
let start_btn;
let pause_btn;
let reset_btn;
let canvas_wrapper;
let game;

// keyevents
function keydown_event(event) {
    let keycode = event.keyCode;
    let new_direction;
    let old_direction = game.direction;

    // avoid 180 degree turns
    switch (keycode) {
        case 37:
            new_direction = Direction.LEFT; break;
        case 38:
            new_direction = Direction.UP; break;
        case 39:
            new_direction = Direction.RIGHT; break;
        case 40:
            new_direction = Direction.DOWN; break;
    }
    if (!array_shallow_equal(scalar_add(old_direction, new_direction), [0,0])) {
        game.direction = new_direction;
    } else {
        console.log("180 degree turns are not allowed");
    }
}

function init() {
    canvas_wrapper = new CanvasWrapper(CANVAS_WIDTH, CANVAS_HEIGHT, CELL_UNIT);
    game = new Snake(canvas_wrapper);

    // init btn vars
    start_btn = document.getElementById("start_button");
    pause_btn = document.getElementById("pause_button");
    reset_btn = document.getElementById("reset_button");

    // register keyevents
    window.addEventListener("keydown", keydown_event);

    game.reset_snake();
}

function start_game() {
    console.log("starting game!");
    start_btn.disabled = true;
    pause_btn.disabled = false;
    reset_btn.disabled = true;
    // animate
    animation_event = setInterval(() => game.incr(stop_game), FRAME_SPEED);
}

function stop_game() {
    console.log("stopping game!");
    start_btn.disabled = false;
    pause_btn.disabled = true;
    reset_btn.disabled = false;
    // remove animation
    clearInterval(animation_event);
}

function reset_game() {
    console.log("resetting world!");
    game.reset_snake();
}
