import { EventBus } from "../EventBus";
import { Scene } from "phaser";

// characters
// texture and import must be the same
import { Dummy } from "@characters/Dummy.js";
import { Yeller } from "@characters/Yeller.js";
import { Skull } from "@characters/Skull.js";
import { Stickman } from "@characters/Stickman";
import { Mouth } from "@characters/Mouth";
import { Balloon } from "@characters/Balloon";
import { Ball } from "@characters/Ball";
import { Me } from "@characters/Me";
import { Chef } from "@characters/Chef";

const NUM_CHAR = Phaser.Math.Between(4, 6);

let possibleChar = [
  Dummy,
  Yeller,
  Skull,
  Stickman,
  Mouth,
  Balloon,
  Ball,
  Me,
  Chef,
];
let charNames = [
  "Dummy",
  "Yeller",
  "Skull",
  "Stickman",
  "Mouth",
  "Balloon",
  "Ball",
  "Me",
  "Chef",
];
let chosenCharNums = [];

export class PlayGround extends Scene {
  constructor() {
    super("Playground");
  }

  preload() {
    this.group = [];
    // load sprites and sfx for chosen characters
    for (let i = 0; i < NUM_CHAR; i++) {
      let charNum = Phaser.Math.Between(0, possibleChar.length - 1);
      let char = charNames[charNum];
      this.load.spritesheet(char, "assets/sprites/" + char + ".png", {
        // I know it isn't very OOP of me, but I just want funny characters walking around
        frameWidth: 32,
        frameHeight: 32,
      });

      for (let i = 0; i < possibleChar[charNum].soundNames.length; i++) {
        this.load.audio(
          char + i,
          "assets/sounds/" + char + "/" + possibleChar[charNum].soundNames[i],
        );
      }

      chosenCharNums.push(charNum);
    }
  }

  create() {
    this.group = [];
    for (let i = 0; i < chosenCharNums.length; i++) {
      // spawn chosen characters
      let character = new possibleChar[chosenCharNums[i]](
        this,
        Phaser.Math.Between(35, this.sys.game.canvas.width - 35),
        Phaser.Math.Between(20, this.sys.game.canvas.height - 20),
        this.sys.game.canvas,
      );
      this.group.push(character);
    }
    EventBus.emit("current-scene-ready", this);
  }

  update(time, delta) {
    for (let i = 0; i < this.group.length; i++) {
      this.group[i].update(time, delta);
    }
  }
}
