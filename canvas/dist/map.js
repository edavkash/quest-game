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
        this.ctx.drawImage(this.img, 0, 0);
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.columns; j++) {
                this.ctx.strokeRect(this.cellSize * i, this.cellSize * j, this.cellSize, this.cellSize);
            }
        }
    }
}
