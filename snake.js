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
    this.fruit = null;
    this.game_over = false;
}

Snake.prototype.reset_snake = function() {
    this.positions = [this.canvas_wrapper.start_position()];
    this.direction = Direction.RIGHT;
    this.fruit = null;
    this.game_over = false;

    this.canvas_wrapper.clear();
    this.canvas_wrapper.draw(this.positions);
};

Snake.prototype.incr = function (stop) {
    this.canvas_wrapper.clear();

    if (!this.fruit) {
        this.fruit = this.generate_fruit();
    }
    this.canvas_wrapper.draw_one(...this.fruit);

    this.update_positions();

    if (this.game_over) {
        this.reset_snake();
        stop();
        this.canvas_wrapper.game_over_screen();
        return;
    }

    // draw all updated positions
    this.canvas_wrapper.draw(this.positions);
};

Snake.prototype.update_positions = function () {
    let snake_length = this.positions.length;
    for(let i = 0; i < snake_length - 1; i++) {
        this.positions[i] = this.positions[i+1];
    }

    let new_position = scalar_add(this.positions[snake_length - 1], this.direction);

    let eating_itself = array_in_array(new_position, this.positions);
    let hitting_horizontal_wall = new_position[0] < 0 || new_position[0] >= this.canvas_wrapper.width_total_cells;
    let hitting_vertical_wall = new_position[1] < 0 || new_position[1] >= this.canvas_wrapper.height_total_cells;

    if (eating_itself || hitting_horizontal_wall || hitting_vertical_wall){
        this.game_over = true;
        return;
    }

    let eats_fruit = new_position.toString() == this.fruit.toString();
    if (eats_fruit) {
        console.log("FOUND A MATCH!", this.positions.length);
        this.positions.push(new_position);
        this.fruit = null;
    } else {
        this.positions[snake_length - 1] = new_position;
    }
};

Snake.prototype.generate_fruit = function () {
    // exclude current positions
    // the value is bounded
    let fruit;
    while(true) {
        let x, y;
        x = Math.floor(Math.random() * this.canvas_wrapper.width_total_cells);
        y = Math.floor(Math.random() * this.canvas_wrapper.height_total_cells);
        fruit = [x, y];
        if (!array_in_array(fruit, this.positions)) break;
    }
    return fruit;
};
