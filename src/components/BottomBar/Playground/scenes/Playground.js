import { EventBus } from "../EventBus";
import { Scene } from "phaser";

// characters
// (texture, import, and class name must all be the same)
import { Dummy } from "@characters/Dummy.js";

const NUM_CHAR = Phaser.Math.Between(3, 5);

let possibleChar = [Dummy];
let charNames = ["Dummy"];
let chosenCharNums = [];

export class PlayGround extends Scene {
  constructor() {
    super("Playground");
  }

  preload() {
    // load images for chosen characters
    for (let i = 0; i < NUM_CHAR; i++) {
      let charNum = Phaser.Math.Between(0, possibleChar.length - 1);
      let char = charNames[charNum];
      this.load.spritesheet(char, "assets/sprites/" + char + ".png", {
        // I know it isn't very OOP of me, but I just want funny characters walking around
        frameWidth: 32,
        frameHeight: 32,
      });

      for (let i = 1; i <= 4; i++) {
        this.load.audio(
          char + i,
          "assets/sounds/" + char + "/" + char + i + ".wav"
        );
      }
      chosenCharNums.push(charNum);
    }
  }

  create() {
    this.group = [];
    for (let i = 0; i < chosenCharNums.length; i++) {
      // spawn chosen characters
      this.group.push(
        new possibleChar[chosenCharNums[i]](
          this,
          Phaser.Math.Between(35, this.sys.game.canvas.width - 35),
          Phaser.Math.Between(20, this.sys.game.canvas.height - 20),
          this.sys.game.canvas
        )
      );
    }

    EventBus.emit("current-scene-ready", this);
  }

  update(time, delta) {
    for (let i = 0; i < this.group.length; i++) {
      this.group[i].update(time, delta);
    }
  }
}
