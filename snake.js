function Snake(canvas_wrapper) {
    this.canvas_wrapper = canvas_wrapper;
    this.start_position = [
        this.canvas_wrapper.canvas.width / 2,
        this.canvas_wrapper.canvas.height / 2
    ];
}

Snake.prototype.reset_snake = function() {
    this.canvas_wrapper.draw(...this.start_position);
};
