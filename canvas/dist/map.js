import { tablemap } from "./value.js";
function getTile(map, col, row) {
    return map[row * tablemap.columns + col];
}
const coordinate = [
    30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
    30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
    30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
    30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
    30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
    30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
    30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
    30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
    30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
];
export class Tilemap {
    constructor(rows, columns, cellSize, ctx, canvas) {
        this.rows = rows;
        this.columns = columns;
        this.cellSize = cellSize;
        this.ctx = ctx;
        this.canvas = canvas;
        this.rows = rows;
        this.columns = columns;
        this.cellSize = cellSize;
        this.img = new Image();
        this.img.src =
            "https://www.frankslaboratory.co.uk/downloads/141/full_map.png";
    }
    grid() {
        var cropping = this.canvas.width / this.cellSize;
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.columns; j++) {
                const renderTile = getTile(coordinate, i, j);
                //image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
                this.ctx.drawImage(this.img, (renderTile - 1 + this.cellSize) % this.canvas.width, Math.floor(renderTile - 1 / cropping) + this.cellSize, this.cellSize, this.cellSize, i * this.cellSize, j * this.cellSize, this.cellSize, this.cellSize);
                this.ctx.strokeRect(this.cellSize * i, this.cellSize * j, this.cellSize, this.cellSize);
            }
        }
    }
}
