export class Tilemap {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.img = new Image();
        this.img.src =
            "https://www.frankslaboratory.co.uk/downloads/141/full_map.png";
    }
    grid() {
        this.img.onload = () => {
            this.ctx.drawImage(this.img, 0, 0, this.canvas.width, this.canvas.height);
        };
    }
}
