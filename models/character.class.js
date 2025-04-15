class Character extends MoveableObject {
  // Player character with controls and animations
  width = 200;
  x = 0;
  height = 200;
  y = 100;
  world;
  speed = 1;
  rotation = 0; // Track current rotation angle in degrees
  bottles = 5; // Track collected poison bottles
  maxBottles = 5; // Maximum number of bottles to collect
  coins = 0;
  maxCoins = 5;
  animation; // Instance of CharacterAnimation

  constructor() {
    super();
    this.offsetTop = 95;
    this.offsetBottom = 45;
    this.offsetX = 40;
    this.offsetY = 40; 
    this.animation = new CharacterAnimation(this);
    this.animate();
  }

  animate() {
    this.setupControlLoop();
    this.animation.animate();
  }

  setupControlLoop() {
    setStoppableInterval(() => {
      if (isGameActive) {
        this.controlCharacter();
        this.updateCamera();
      }
    }, 1000 / 160);
  }

  updateCamera() {
    this.world.camera_x = -this.x + 100;
  }

  isMoving() {
    return this.world.keyboard.RIGHT || 
           this.world.keyboard.LEFT || 
           this.world.keyboard.UP || 
           this.world.keyboard.DOWN;
  }

  controlCharacter() {
    this.handleHorizontalMovement();
    this.handleVerticalMovement();
    this.updateRotation();
  }

  handleHorizontalMovement() {
    if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
      this.moveRight();
    }
    if (this.world.keyboard.LEFT && this.x > 0) {
      this.moveLeft();
    }
  }

  moveRight() {
    this.x += this.speed;
    this.otherDirection = false;
  }

  moveLeft() {
    this.x -= this.speed;
    this.otherDirection = true;
  }

  handleVerticalMovement() {
    if (this.world.keyboard.UP && this.y > -90) {
      this.moveUp();
    }
    if (this.world.keyboard.DOWN && this.y < 320) {
      this.moveDown();
    }
  }

  moveUp() {
    this.y -= this.speed;
    this.rotation = -10;
  }

  moveDown() {
    this.y += this.speed;
    this.rotation = 20;
  }

  updateRotation() {
    if (!this.world.keyboard.UP && !this.world.keyboard.DOWN) {
      this.rotation = 0;
    }
  }

  hit() {
    if (this.animation.triggerHit()) {
      super.hit();
    }
  }

  startSlapping() {
    return this.animation.startSlapping();
  }

  startShooting() {
    return this.animation.startShooting();
  }

  collectBottle() {
    if (this.bottles < this.maxBottles) {
      this.bottles++;
      return true; // Successfully collected
    }
    return false; // Already at maximum
  }

  collectCoins() {
    if (this.coins < this.maxCoins) {
      this.coins++;
      return true;
    }
    return false;
  }
  
  useBottle() {
    if (this.bottles > 0) {
      this.bottles--;
      return true; // Successfully used a bottle
    }
    return false; // No bottles available
  }

  playAnimation(images) {
    this.animation.playCharacterAnimation(images);
  }
}