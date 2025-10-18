import { EventBus } from "../EventBus";
import { Scene } from "phaser";

// characters
// (texture, import, and class name must all be the same)
import { Player } from "@characters/Player.js";

const NUM_CHAR = 3;

let possibleChar = [Player];
let chosenChar = [];

export class PlayGround extends Scene {
  constructor() {
    super("Playground");
  }

  preload() {
    // load images for chosen characters
    for (let i = 0; i < NUM_CHAR; i++) {
      let char = possibleChar[0];
      this.load.image(char.name, "assets/" + char.name + ".png");
      chosenChar.push(char);
    }
  }

  create() {
    this.group = [];
    for (let i = 0; i < NUM_CHAR; i++) {
      // spawn chosen characters
      this.group.push(
        new chosenChar[i](
          this,
          Phaser.Math.Between(30, this.sys.game.canvas.width - 30),
          Phaser.Math.Between(15, this.sys.game.canvas.height - 15),
          this.sys.game.canvas
        )
      );
    }

    EventBus.emit("current-scene-ready", this);
  }

  update(time, delta) {
    for (let i = 0; i < NUM_CHAR; i++) {
      this.group[i].update(time, delta);
    }
  }
}
