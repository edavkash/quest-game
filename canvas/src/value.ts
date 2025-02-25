interface Table {
  xside: number;
  yside: number;
  s_width: number;
  s_height: number;
  frameX: number;
  frameY: number;
  frameCount: number;
  gameState: number;
  speed: number;
  default: string;
}

export const table: Table = {
  xside: 0,
  yside: 0,
  s_width: 80,
  s_height: 100,
  frameX: 0,
  frameY: 0,
  frameCount: 5,
  gameState: 0,
  speed: 5,
  default: "front",
};
