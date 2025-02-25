import { Player } from "./player.js";
import { table } from "./value.js";
import { Tilemap } from "./map.js";
import { tablemap } from "./value.js";
window.addEventListener("load", () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 800;
    canvas.height = 320;
    const player = new Player(table.xside, table.yside, table.s_width, table.s_height, table.speed, table.default, canvas, ctx);
    const tilemap = new Tilemap(tablemap.rows, tablemap.columns, tablemap.cellSize, ctx, canvas);
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        tilemap.grid();
        player.collision();
        player.update();
        requestAnimationFrame(animate);
    }
    animate();
    console.log("Context:", ctx);
    console.log("Player:", player);
    console.log("Type:", typeof table);
});
