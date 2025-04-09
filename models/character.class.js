class Character extends MoveableObject {
  // Player character with controls and animations
  width = 200;
  x = 0;
  height = 200;
  y = 100;
  world;
  speed = 1;
  rotation = 0; // Track current rotation angle in degrees
  idleTime = 0;
  isInSleepMode = false;
  sleepCycleComplete = false;
  currentSleepFrame = 0;
  isHit = false;
  hitTime = 0;
  hitDuration = 100; // Duration of hit animation in ms
  animationSpeed = {
    swimming: 100,
    standing: 150,
    sleeping: 300,
    hit: 100, // Add hit animation speed
    shooting: 50
  };
  lastAnimationUpdate = {
    swimming: 0,
    standing: 0,
    sleeping: 0,
    hit: 0, // Add hit animation timestamp
    shooting: 0
  };
  bottles = 0; // Track collected poison bottles
  maxBottles = 5; // Maximum number of bottles to collect
  coins = 0;
  maxCoins = 5;
  isShooting = false;
  shootingTime = 0;
  shootingDuration = 350; // Duration of shooting animation in ms
  shootingComplete = false; // Flag to indicate when to create the projectile
  canShoot = true; // Flag to prevent multiple shots per animation
  shootingProcessed = false; // Flag to track if shooting has been processed
  currentShootingFrame = 0; // Track current shooting frame

  IMAGES_STAND = [
    // Standing/idle animation frames
    './img/1.Sharkie/1.IDLE/1.png',
    './img/1.Sharkie/1.IDLE/2.png',
    './img/1.Sharkie/1.IDLE/3.png',
    './img/1.Sharkie/1.IDLE/4.png',
    './img/1.Sharkie/1.IDLE/5.png',
    './img/1.Sharkie/1.IDLE/6.png',
    './img/1.Sharkie/1.IDLE/7.png',
    './img/1.Sharkie/1.IDLE/8.png',
    './img/1.Sharkie/1.IDLE/9.png',
    './img/1.Sharkie/1.IDLE/10.png',
    './img/1.Sharkie/1.IDLE/11.png',
    './img/1.Sharkie/1.IDLE/12.png',
    './img/1.Sharkie/1.IDLE/13.png',
    './img/1.Sharkie/1.IDLE/14.png',
    './img/1.Sharkie/1.IDLE/15.png',
    './img/1.Sharkie/1.IDLE/16.png',
    './img/1.Sharkie/1.IDLE/17.png',
    './img/1.Sharkie/1.IDLE/18.png'
  ];

  IMAGES_SWIMMING = [
    // Swimming animation frames
    './img/1.Sharkie/3.Swim/1.png',
    './img/1.Sharkie/3.Swim/2.png',
    './img/1.Sharkie/3.Swim/3.png',
    './img/1.Sharkie/3.Swim/4.png',
    './img/1.Sharkie/3.Swim/5.png',
    './img/1.Sharkie/3.Swim/6.png'
  ];

  IMAGES_SLEEP = [
    // Sleeping animation frames
    './img/1.Sharkie/2.Long_IDLE/i1.png',
    './img/1.Sharkie/2.Long_IDLE/I2.png',
    './img/1.Sharkie/2.Long_IDLE/I3.png',
    './img/1.Sharkie/2.Long_IDLE/I4.png',
    './img/1.Sharkie/2.Long_IDLE/I5.png',
    './img/1.Sharkie/2.Long_IDLE/I6.png',
    './img/1.Sharkie/2.Long_IDLE/I7.png',
    './img/1.Sharkie/2.Long_IDLE/I8.png',
    './img/1.Sharkie/2.Long_IDLE/I9.png',
    './img/1.Sharkie/2.Long_IDLE/I10.png',
    './img/1.Sharkie/2.Long_IDLE/I11.png',
    './img/1.Sharkie/2.Long_IDLE/I12.png',
    './img/1.Sharkie/2.Long_IDLE/I13.png',
    './img/1.Sharkie/2.Long_IDLE/I14.png'
  ];

  IMAGES_HIT = [
    // Hit animation frames
    './img/1.Sharkie/5.Hurt/1.Poisoned/1.png',
    './img/1.Sharkie/5.Hurt/1.Poisoned/2.png',
    './img/1.Sharkie/5.Hurt/1.Poisoned/3.png',
    './img/1.Sharkie/5.Hurt/1.Poisoned/4.png',
  ];

  IMAGES_SHOOTING = [
    './img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/1.png',
    './img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/2.png',
    './img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/3.png',
    './img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/4.png',
    './img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/5.png',
    './img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/6.png',
    './img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/7.png'
  ];

  IMAGES_DEAD = [
    // Dead animation frames
    './img/1.Sharkie/6.dead/1.Poisoned/1.png',
    './img/1.Sharkie/6.dead/1.Poisoned/2.png',
    './img/1.Sharkie/6.dead/1.Poisoned/3.png',
    './img/1.Sharkie/6.dead/1.Poisoned/4.png',
    './img/1.Sharkie/6.dead/1.Poisoned/5.png',
    './img/1.Sharkie/6.dead/1.Poisoned/6.png',
    './img/1.Sharkie/6.dead/1.Poisoned/7.png',
    './img/1.Sharkie/6.dead/1.Poisoned/8.png',
    './img/1.Sharkie/6.dead/1.Poisoned/9.png',
    './img/1.Sharkie/6.dead/1.Poisoned/10.png',
    './img/1.Sharkie/6.dead/1.Poisoned/11.png',
    './img/1.Sharkie/6.dead/1.Poisoned/12.png',
  ];
  
  constructor() {
    super().loadImage(this.IMAGES_STAND[0]);
    this.loadImages(this.IMAGES_STAND);
    this.loadImages(this.IMAGES_SWIMMING);
    this.loadImages(this.IMAGES_SLEEP);
    this.loadImages(this.IMAGES_HIT);
    this.loadImages(this.IMAGES_SHOOTING);
    this.loadImages(this.IMAGES_DEAD);
    this.offsetTop = 95;
    this.offsetBottom = 45;
    this.offsetX = 40;
    this.offsetY = 40; 
    this.animate();
  }

  animate() {
    this.setupControlLoop();
    this.setupAnimationLoop();
  }

  setupControlLoop() {
    setInterval(() => {
      this.controlCharacter();
      this.updateCamera();
    }, 1000 / 160);
  }

  updateCamera() {
    this.world.camera_x = -this.x + 100;
  }

  setupAnimationLoop() {
    setInterval(() => {
      const now = new Date().getTime();
      if (this.isDead()) {
        this.handleDeadAnimation();
      } else if (this.isHit) {
        this.handleHitAnimation(now);
      } else if (this.isShooting) {
        this.handleShootingAnimation(now);
      } else if (this.isMoving()) {
        this.handleMovementAnimation(now);
      } else {
        this.handleIdleAnimation(now);
      }
    }, 100);
  }

  isMoving() {
    return this.world.keyboard.RIGHT || 
           this.world.keyboard.LEFT || 
           this.world.keyboard.UP || 
           this.world.keyboard.DOWN;
  }

  handleDeadAnimation() {
    this.playAnimation(this.IMAGES_DEAD);
  }

  handleHitAnimation(now) {
    if (now - this.lastAnimationUpdate.hit >= this.animationSpeed.hit) {
      this.playAnimation(this.IMAGES_HIT);
      this.lastAnimationUpdate.hit = now;
      this.hitTime += 100;
      if (this.hitTime >= this.hitDuration) {
        this.isHit = false;
        this.hitTime = 0;
      }
    }
  }

  handleShootingAnimation(now) {
    // Only update animation when enough time has passed
    const timeElapsed = now - this.lastAnimationUpdate.shooting;
    if (timeElapsed < this.animationSpeed.shooting) return;
    // 1. Update animation frame - manually control which frame is shown
    this.lastAnimationUpdate.shooting = now;
    // Use the current frame index instead of cycling through all frames
    if (this.currentShootingFrame < this.IMAGES_SHOOTING.length) {
      this.img = this.imageCache[this.IMAGES_SHOOTING[this.currentShootingFrame]];
      this.currentShootingFrame++; // Move to next frame
    }
    // Track overall animation progress
    this.shootingTime += 100;
    // 2. Only set shootingComplete at the very end of the animation
    if (this.currentShootingFrame >= this.IMAGES_SHOOTING.length - 1 && !this.shootingComplete) {
      this.shootingComplete = true;
    }
    // 3. Add a small delay before resetting to allow for projectile creation
    if (this.currentShootingFrame >= this.IMAGES_SHOOTING.length) {
      this.resetShootingState();
    }
  }
  
  // Helper method to reset all shooting-related state
  resetShootingState() {
    this.isShooting = false;
    this.shootingTime = 0;
    this.shootingComplete = false;
    this.shootingProcessed = false;
    this.currentShootingFrame = 0; // Reset frame index
    setTimeout(() => {
      this.canShoot = true;
    }, 200);
  }

  handleMovementAnimation(now) {
    // Reset idle time when moving
    this.idleTime = 0;
    this.isInSleepMode = false;
    this.sleepCycleComplete = false;
    this.currentSleepFrame = 0;
    // Update swimming animation at swimming speed
    if (now - this.lastAnimationUpdate.swimming >= this.animationSpeed.swimming) {
      this.playAnimation(this.IMAGES_SWIMMING);
      this.lastAnimationUpdate.swimming = now;
    }
  }

  handleIdleAnimation(now) {
    // Character is idle
    this.updateIdleState();
    if (this.isInSleepMode) {
      this.playSlowSleepAnimation(now);
    } else {
      this.playStandingAnimation(now);
    }
  }

  updateIdleState() {
    this.idleTime += 100; // Add 100ms to idle time
    if (this.idleTime > 5000 && !this.isInSleepMode) {
      // After 5 seconds of idle time, start sleep animation
      this.isInSleepMode = true;
      this.sleepCycleComplete = false;
      this.currentSleepFrame = 0;
    }
  }

  playSlowSleepAnimation(now) {
    // Only update animation when enough time has passed
    if (now - this.lastAnimationUpdate.sleeping >= this.animationSpeed.sleeping) {
      this.lastAnimationUpdate.sleeping = now;
      if (!this.sleepCycleComplete) {
        this.playInitialSleepAnimation();
      } else {
        this.playLoopingSleepAnimation();
      }
    }
  }
  
  playInitialSleepAnimation() {
    // First cycle: Play full animation
    this.img = this.imageCache[this.IMAGES_SLEEP[this.currentSleepFrame]];
    this.currentSleepFrame++;
    // Check if first cycle is complete
    if (this.currentSleepFrame >= this.IMAGES_SLEEP.length) {
      this.sleepCycleComplete = true;
      this.currentSleepFrame = 10; // Index for frame 11
    }
  }
  
  playLoopingSleepAnimation() {
    // After first cycle: Only play frames 11-14
    this.img = this.imageCache[this.IMAGES_SLEEP[this.currentSleepFrame]];
    this.currentSleepFrame++; 
    // Loop between frames 10-14 (indices 10-13)
    if (this.currentSleepFrame > 13) {
      this.currentSleepFrame = 10;
    }
  }

  playStandingAnimation(now) {
    // Update standing animation at standing speed
    if (now - this.lastAnimationUpdate.standing >= this.animationSpeed.standing) {
      this.playAnimation(this.IMAGES_STAND);
      this.lastAnimationUpdate.standing = now;
    }
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
    if (!this.isDead() && !this.isHit) {
      this.isHit = true;
      this.hitTime = 0;
      super.hit();
    }
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

  startShooting() {
    // Only start shooting if we have bottles and aren't already shooting
    if (this.bottles > 0 && !this.isShooting && this.canShoot) {
      this.isShooting = true;
      this.canShoot = false;
      this.shootingComplete = false;
      this.shootingProcessed = false;
      this.shootingTime = 0;
      this.currentShootingFrame = 0; // Reset frame index when starting new shot
      return true;
    }
    return false;
  }
}