export class Me extends Phaser.Physics.Arcade.Sprite {
  static soundNames = [
    "me_sound.mp3",
    "me_sound1.mp3",
    "me_sound2.mp3",
    "me_sound3.mp3",
  ];

  constructor(scene, x, y, gameSize) {
    super(scene, x, y, "Me");
    scene.add.existing(this);
    this.texture = "Me";

    this.gameSize = gameSize;
    this.moveSpeed = 0.11;
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

    // gave up trying to get random frame
    this.anims.create({
      key: "face1",
      frames: this.anims.generateFrameNumbers(this.texture, {
        start: 3,
        end: 3,
      }),
    });
    this.anims.create({
      key: "face2",
      frames: this.anims.generateFrameNumbers(this.texture, {
        start: 4,
        end: 4,
      }),
    });
    this.anims.create({
      key: "face3",
      frames: this.anims.generateFrameNumbers(this.texture, {
        start: 5,
        end: 5,
      }),
    });

    this.States = {
      IDLE: "idle",
      WALK: "walk",
      FACE: "face",
    };
    this.state = this.States.IDLE;

    this.idleMin = 1.5;
    this.idleMax = 2;
    this.walkMin = 0.75;
    this.walkMax = 1.5;
    this.time = Phaser.Math.Between(this.idleMin, this.idleMax);

    this.walkX = 0;
    this.walkY = 0;

    this.on("pointerdown", () => this.OnClick());
  }

  AddSounds(scene) {
    this.sounds = [];
    for (let i = 0; i < Me.soundNames.length; i++) {
      this.sounds.push(
        scene.sound.add(this.texture + i, {
          volume: 0.8,
        }),
      );
    }
  }

  OnClick() {
    this.state = this.States.FACE;
    this.time = 1;
    this.sounds[Phaser.Math.Between(0, this.sounds.length - 1)].play();
    let randFrame = "face" + Phaser.Math.Between(1, 3);
    this.play(randFrame);
  }

  update(time, delta) {
    this.time -= 0.001 * delta;
    if (this.state == this.States.IDLE) {
      this.Idle();
    } else if (this.state == this.States.WALK) {
      this.Walk(this.walkX, this.walkY, delta);
    } else if (this.state == this.States.FACE) {
      // switch to idle
      if (this.time <= 0) {
        this.state = this.States.IDLE;
      }
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
    this.play("idle", true);
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

    // switch to idle animation
    if (this.time <= 0) {
      this.state = this.States.IDLE;
      this.time = Phaser.Math.Between(this.idleMin, this.idleMax);
    }
  }
}
