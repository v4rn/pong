const Direction = {
    UP: [0, -1],
    DOWN: [0, 1],
    LEFT: [-1, 0],
    RIGHT: [1, 0],
};

function Snake(canvas_wrapper) {
    this.canvas_wrapper = canvas_wrapper;
    this.direction = Direction.RIGHT;
    this.positions = [this.canvas_wrapper.start_position()];
}

Snake.prototype.reset_snake = function() {
    this.positions = [this.canvas_wrapper.start_position()];
    this.canvas_wrapper.draw(this.positions);
};

Snake.prototype.incr = function () {
    this.update_positions();
    this.canvas_wrapper.draw(this.positions);
};

Snake.prototype.update_positions = function () {
    let snake_length = this.positions.length;
    for(let i = snake_length - 1; i > 0; i--) {
        this.positions[i-1] = this.positions[i];
    }
    this.positions[snake_length - 1] = scalar_add(this.positions[snake_length - 1], this.direction);
};
