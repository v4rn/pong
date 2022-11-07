function CanvasWrapper(canvas_width, canvas_height, cell_unit) {
    this.canvas = document.getElementById("canvas");
    this.canvas.width = canvas_width;
    this.canvas.height = canvas_height;

    this.xoffset = this.canvas.offsetLeft;
    this.yoffset = this.canvas.offsetTop;

    this.ctx = this.canvas.getContext("2d");
    this.cell_unit = cell_unit;

    this.width_total_cells = Math.floor(this.canvas.width / cell_unit);
    this.height_total_cells = Math.floor(this.canvas.height / cell_unit);
}

CanvasWrapper.prototype.draw = function(list_of_positions) {
    // clear the canvas
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for(let i = 0; i < list_of_positions.length; i++) {
        let [x, y] = list_of_positions[i];
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(x * this.cell_unit, y * this.cell_unit, this.cell_unit, this.cell_unit);
        this.ctx.strokeRect(x * this.cell_unit, y * this.cell_unit, this.cell_unit, this.cell_unit);
    }
};

CanvasWrapper.prototype.start_position = function() {
    return [this.width_total_cells / 2, this.height_total_cells / 2];
};
