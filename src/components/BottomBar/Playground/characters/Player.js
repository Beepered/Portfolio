export class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, gameSize) {
    let texture = "Player";
    super(scene, x, y, texture);
    this.scene.add.existing(this);

    this.gameSize = gameSize;
    this.moveSpeed = 0.1;

    /*
    this.anims.create({
      key: "idle",
      frames: this.anims.generateFrameNumbers(texture, {
        start: 0,
        end: 2,
      }),
    });
    */
    this.States = {
      IDLE: "idle",
      WALK: "walk",
    };
    this.state = this.States.IDLE;

    this.idleMin = 1;
    this.idleMax = 3;
    this.walkMin = 2;
    this.walkMax = 3;
    this.time = Phaser.Math.Between(this.idleMin, this.idleMax);

    this.walkX = 0;
    this.walkY = 0;
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
    // idle animation
    if (this.time <= 0) {
      this.walkX = Phaser.Math.Between(-1, 1); // FloatBetween
      this.walkY = Phaser.Math.Between(-1, 1);

      this.time = Phaser.Math.Between(this.idleMin, this.idleMax);
      this.state = this.States.WALK;
    }
  }

  Walk(walkX, walkY, delta) {
    this.x += walkX * this.moveSpeed * delta;
    this.y += walkY * this.moveSpeed * delta;

    // check if at sides of screen
    if (this.x <= this.width / 2 + 5) {
      this.walkX = 1;
    } else if (this.x >= this.gameSize.width - this.width / 2 - 5) {
      this.walkX = -1;
    }

    // check if at top or bottom of screen
    if (this.y <= this.height / 2 + 5) {
      this.walkY = 1;
    } else if (this.y >= this.gameSize.height - this.height / 2 - 5) {
      this.walkY = -1;
    }

    // walk animation
    if (this.time <= 0) {
      this.state = this.States.IDLE;
      this.time = Phaser.Math.Between(this.idleMin, this.idleMax);
    }
  }
}
