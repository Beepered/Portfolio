export class Mouth extends Phaser.Physics.Arcade.Sprite {
  static soundNames = ["Mouth1.wav", "Mouth2.wav", "Mouth3.wav", "Mouth4.wav"];

  constructor(scene, x, y, gameSize) {
    super(scene, x, y, "Mouth");
    scene.add.existing(this);
    this.texture = "Mouth";

    this.gameSize = gameSize;
    this.moveSpeed = 0.08;
    this.setInteractive({ useHandCursor: true });

    this.sounds = [];
    this.AddSounds(scene);

    this.anims.create({
      key: "idle",
      frames: this.anims.generateFrameNumbers(this.texture, {
        frameRate: 3,
        start: 0,
        end: 2,
      }),
    });
    this.anims.create({
      key: "walk",
      frames: this.anims.generateFrameNumbers(this.texture, {
        frameRate: 3,
        start: 3,
        end: 8,
      }),
    });

    this.States = {
      IDLE: "idle",
      WALK: "walk",
    };
    this.state = this.States.IDLE;

    this.idleMin = 2;
    this.idleMax = 4;
    this.walkMin = 1;
    this.walkMax = 2.5;
    this.time = Phaser.Math.Between(this.idleMin, this.idleMax);

    this.walkX = 0;
    this.walkY = 0;

    this.on("pointerdown", () => this.OnClick());
  }

  AddSounds(scene) {
    this.sounds = [];
    for (let i = 0; i < Mouth.soundNames.length; i++) {
      this.sounds.push(
        scene.sound.add(this.texture + i, {
          volume: 0.6,
        })
      );
    }
  }

  OnClick() {
    this.sounds[Phaser.Math.Between(0, this.sounds.length - 1)].play();
  }

  update(time, delta) {
    this.time -= 0.001 * delta;
    if (this.state == this.States.IDLE) {
      this.Idle();
    } else if (this.state == this.States.WALK) {
      this.Walk(this.walkX, this.walkY, delta);
    }
  }

  Idle() {
    this.play("idle", true);
    if (this.time <= 0) {
      this.walkX = Phaser.Math.FloatBetween(-1, 1);
      this.walkY = Phaser.Math.FloatBetween(-1, 1);

      this.time = Phaser.Math.Between(this.idleMin, this.idleMax);
      this.state = this.States.WALK;
    }
  }

  Walk(walkX, walkY, delta) {
    this.play("walk", true);
    this.x += walkX * this.moveSpeed * delta;
    this.y += walkY * this.moveSpeed * delta;

    this.flipX = this.walkX < 0; // flip if walk backwards

    // check if at sides of screen
    if (this.x <= this.width / 2 + 5) {
      this.walkX *= -1;
    } else if (this.x >= this.gameSize.width - this.width / 2 - 5) {
      this.walkX *= -1;
    }

    // check if at top or bottom of screen
    if (this.y <= this.height / 2 + 5) {
      this.walkY *= -1;
    } else if (this.y >= this.gameSize.height - this.height / 2 - 5) {
      this.walkY *= -1;
    }

    // walk animation
    if (this.time <= 0) {
      this.state = this.States.IDLE;
      this.time = Phaser.Math.Between(this.idleMin, this.idleMax);
    }
  }
}
