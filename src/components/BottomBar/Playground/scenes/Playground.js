import { EventBus } from "../EventBus";
import { Scene } from "phaser";

// characters
// (texture, import, and class name must all be the same)
import { Dummy } from "@characters/Dummy.js";

const NUM_CHAR = 3;

let possibleChar = [Dummy];
let chosenChar = [];

export class PlayGround extends Scene {
  constructor() {
    super("Playground");
  }

  preload() {
    // load images for chosen characters
    for (let i = 0; i < NUM_CHAR; i++) {
      let char = possibleChar[Phaser.Math.Between(0, possibleChar.length - 1)];
      this.load.spritesheet(char.name, "assets/sprites/" + char.name + ".png", {
        // I know it isn't very OOP of me, but I just want funny characters walking around
        frameWidth: 32,
        frameHeight: 32,
      });

      // load audio
      for (let i = 1; i <= 4; i++) {
        this.load.audio(
          char.name + i,
          "assets/sounds/" + char.name + "/" + char.name + i + ".wav"
        );
      }

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
