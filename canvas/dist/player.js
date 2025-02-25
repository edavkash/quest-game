import { table } from "./value.js";
const animationSprite = {};
const animationStates = [
    {
        name: "front",
        frames: table.frameCount,
    },
    {
        name: "right",
        frames: table.frameCount,
    },
    {
        name: "back",
        frames: table.frameCount,
    },
    {
        name: "left",
        frames: table.frameCount,
    },
];
animationStates.forEach((state, index) => {
    let frames = {
        Location: [],
    };
    for (let i = 0; i < state.frames; i++) {
        let positionX = i * table.s_width;
        let positionY = index * table.s_height;
        frames.Location.push({ x: positionX, y: positionY });
    }
    animationSprite[state.name] = frames;
});
export class Player {
    constructor(x, y, _width, _height, speed, defaultAnimation, canvas, ctx) {
        this.x = x;
        this.y = y;
        this._width = _width;
        this._height = _height;
        this.speed = speed;
        this.defaultAnimation = defaultAnimation;
        this.canvas = canvas;
        this.ctx = ctx;
        this.playerImage = new Image();
        this.playerImage.src = "Game-assets/sprite.png";
        this.move();
    }
    move() {
        document.addEventListener("keydown", (event) => {
            event.preventDefault();
            switch (event.key) {
                case "ArrowUp":
                    this.defaultAnimation = "back";
                    this.y -= this.speed;
                    break;
                case "ArrowDown":
                    this.defaultAnimation = "front";
                    this.y += this.speed;
                    break;
                case "ArrowRight":
                    this.defaultAnimation = "right";
                    this.x += this.speed;
                    break;
                case "ArrowLeft":
                    this.defaultAnimation = "left";
                    this.x -= this.speed;
                    break;
                default:
                    break;
            }
        });
    }
    protagonist(image, x, y, s_width, s_height, xvalue, yvalue, i_width, i_height) {
        //drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
        this.ctx.drawImage(image, x, y, s_width, s_height, xvalue, yvalue, i_width, i_height);
    }
    update() {
        this.ctx.imageSmoothingEnabled = false;
        let position = Math.floor(table.gameState / table.frameCount) %
            animationSprite[this.defaultAnimation].Location.length;
        const frameX = animationSprite[this.defaultAnimation].Location[position].x;
        const frameY = animationSprite[this.defaultAnimation].Location[position].y;
        this.collision();
        this.protagonist(this.playerImage, frameX, frameY, table.s_width, table.s_height, this.x, this.y, table.s_width, table.s_height);
        table.gameState++;
    }
    collision() {
        //Boundary check Left
        if (this.x < 0)
            this.x = 0;
        //Boundary check Top
        if (this.y < 0)
            this.y = 0;
        //Boundary check Right
        if (this.x + this._width > this.canvas.width)
            this.x = this.canvas.width - this._width;
        //Boundary check bottom
        if (this.y + this._height > this.canvas.height)
            this.y = this.canvas.height - this._height;
    }
}
