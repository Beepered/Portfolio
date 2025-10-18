import Phaser from "phaser";
import { PlayGround } from "./scenes/Playground";

// Find out more information about the Game Config at:
// https://docs.phaser.io/api-documentation/typedef/types-core#gameconfig

const config = {
  type: Phaser.AUTO,
  pixelArt: true,
  width: 650,
  height: 110,
  parent: "game-container",
  backgroundColor: "#162470",
  scene: [PlayGround],
};

const StartGame = (parent) => {
  return new Phaser.Game({ ...config, parent });
};

export default StartGame;
