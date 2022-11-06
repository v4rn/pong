function CanvasWrapper(canvas_width, canvas_height, snake_unit) {
    this.canvas = document.getElementById("canvas");
    this.canvas.width = canvas_width;
    this.canvas.height = canvas_height;

    this.xoffset = this.canvas.offsetLeft;
    this.yoffset = this.canvas.offsetTop;

    this.ctx = this.canvas.getContext("2d");
    this.cell_dim = snake_unit;
}

CanvasWrapper.prototype.draw = function(x, y) {
    console.log(x, y);
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(x, y, this.cell_dim, this.cell_dim);
    this.ctx.strokeRect(x, y, this.cell_dim, this.cell_dim);
};
