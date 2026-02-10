export class Ball extends Phaser.Physics.Arcade.Sprite {
  static soundNames = ["Ball_Shoot.wav", "Ball1.wav", "Ball2.wav", "Ball3.wav"];

  constructor(scene, x, y, gameSize) {
    super(scene, x, y, "Ball");
    scene.add.existing(this);
    this.texture = "Ball";

    this.gameSize = gameSize;
    this.moveSpeed = 0.06;
    this.setInteractive({ useHandCursor: true });

    this.sounds = [];
    this.AddSounds(scene);

    this.anims.create({
      key: "idle",
      frames: this.anims.generateFrameNumbers(this.texture, {
        frameRate: 1,
        start: 0,
        end: 1,
      }),
    });
    this.anims.create({
      key: "walk",
      frames: this.anims.generateFrameNumbers(this.texture, {
        frameRate: 1,
        start: 2,
        end: 5,
      }),
    });
    this.anims.create({
      key: "roll",
      frames: this.anims.generateFrameNumbers(this.texture, {
        frameRate: 5,
        start: 6,
        end: 8,
      }),
    });

    this.States = {
      IDLE: "idle",
      WALK: "walk",
      ROLL: "roll",
    };
    this.state = this.States.IDLE;

    this.idleMin = 2.5;
    this.idleMax = 5;
    this.walkMin = 1.5;
    this.walkMax = 3;
    this.time = Phaser.Math.Between(this.idleMin, this.idleMax);

    this.walkX = 0;
    this.walkY = 0;

    // used for roll state
    this.vel = 0;

    this.on("pointerdown", (pointer, localX, localY) =>
      this.OnClick(localX, localY),
    );
  }

  AddSounds(scene) {
    this.sounds = [];
    for (let i = 0; i < Ball.soundNames.length; i++) {
      this.sounds.push(
        scene.sound.add(this.texture + i, {
          volume: 0.6,
        }),
      );
    }
  }

  OnClick(localX, localY) {
    this.sounds[0].play();
    this.walkX = localX < this.width / 2 ? 1 : -1;
    this.walkY = localY < this.height / 2 ? 1 : -1;

    this.vel = 0.75;
    this.state = this.States.ROLL;
  }

  update(time, delta) {
    this.time -= 0.001 * delta;
    if (this.state == this.States.IDLE) {
      this.Idle();
    } else if (this.state == this.States.WALK) {
      this.Walk(this.walkX, this.walkY, delta);
    } else if (this.state == this.States.ROLL) {
      this.Roll(this.walkX, this.walkY, this.vel, delta);
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

  Roll(walkX, walkY, velocity, delta) {
    this.play("roll", true);
    this.x += walkX * velocity * delta;
    this.y += walkY * velocity * delta;

    this.vel -= 0.0005 * delta;

    this.flipX = this.walkX < 0; // flip if roll backwards

    // check if at sides of screen
    if (this.x <= this.width / 2 + 5) {
      this.x = this.width / 2 + 5;
      this.walkX *= -0.7;
      this.sounds[Phaser.Math.Between(1, this.sounds.length - 1)].play();
    } else if (this.x >= this.gameSize.width - this.width / 2 - 5) {
      this.x = this.gameSize.width - this.width / 2 - 5;
      this.walkX *= -0.7;
      this.sounds[Phaser.Math.Between(1, this.sounds.length - 1)].play();
    }

    // check if at top or bottom of screen
    if (this.y <= this.height / 2 + 5) {
      this.y = this.height / 2 + 5;
      this.walkY *= -0.7;
      this.sounds[Phaser.Math.Between(1, this.sounds.length - 1)].play();
    } else if (this.y >= this.gameSize.height - this.height / 2 - 5) {
      this.y = this.gameSize.height - this.height / 2 - 5;
      this.walkY *= -0.7;
      this.sounds[Phaser.Math.Between(1, this.sounds.length - 1)].play();
    }

    // switch to idle animation
    if (this.vel <= 0) {
      this.state = this.States.IDLE;
      this.time = Phaser.Math.Between(this.idleMin, this.idleMax);
    }
  }
}
