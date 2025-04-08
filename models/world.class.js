class World {
  // Game world that manages all objects and rendering
  character = new Character(); // Player character
  level = level_1; // Current level
  canvas; // Game canvas
  ctx; // Canvas 2D context
  keyboard; // Keyboard input reference
  camera_x = 0; // Camera horizontal position
  statusBar =  new StatusBar();
  coinBar = new CoinBar();
  posionBar = new PosionBar();
  throwableObject = [];

  constructor(canvas, keyboard) {
    // Initialize world with canvas and input
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.run();
    this.updatePoisonBar(); // Initialize poison bar
  }

  setWorld() {
    // Connect character to world for access to world properties
    this.character.world = this;
  }

  run() {
    setInterval(() => {
      this.checkCollisions();
      this.checkThrowObjects();
      }, 100);
  }

  checkThrowObjects() {
    // Start shooting animation when D is pressed
    if (this.keyboard.D && this.character.startShooting()) {
      // The animation is started, but no projectile yet
    }
    
    // Create projectile when shooting animation is at the right point
    if (this.character.shootingComplete && !this.character.shootingProcessed && this.character.useBottle()) {
      // Create the projectile
      let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
      this.throwableObject.push(bottle);
      
      // Update the poison bar to reflect the used bottle
      this.updatePoisonBar();
      
      // Mark as processed to prevent multiple projectiles
      this.character.shootingProcessed = true;
    }
  }

  checkCollisions() {
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy)) {
        if (enemy instanceof Posion) {
          this.handlePoisonCollision(enemy);
        } else {
          this.handleEnemyCollision();
        }
      }
    });
  }
  
  handlePoisonCollision(poisonBottle) {
    if (this.character.collectBottle()) {
      this.removeFromLevel(poisonBottle);
      this.updatePoisonBar();
    }
  }
  
  handleEnemyCollision() {
    this.character.hit();
    this.statusBar.setPercentage(this.character.energy);
  }
  
  removeFromLevel(object) {
    let index = this.level.enemies.indexOf(object);
    if (index > -1) {
      this.level.enemies.splice(index, 1);
    }
  }

  updatePoisonBar() {
    // Calculate percentage based on current bottles (0-10 maps to 0-100%)
    let percentage = (this.character.bottles / this.character.maxBottles) * 100;
    this.posionBar.setPercentage(percentage);
  }

  draw() {
    // Main render loop - clear canvas, apply camera transform, draw objects
    // Uses requestAnimationFrame for smooth animation
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.translate(this.camera_x, 0);
    this.addObjectsToMap(this.level.backgroundObject);
    this.addObjectsToMap(this.throwableObject); 
    
    this.addObjectsToMap(this.level.enemies);
    this.addToMap(this.character);

    this.ctx.translate(-this.camera_x, 0);
    // ---- Space for fixed objects ----
    this.addToMap(this.statusBar);
    this.addToMap(this.coinBar);
    this.addToMap(this.posionBar);
    this.ctx.translate(this.camera_x, 0);

    this.ctx.translate(-this.camera_x, 0);
    // Draw() wird immer wieder aufgerufen
    let self = this;
    requestAnimationFrame(function() {
      self.draw();
    });
  }

  addObjectsToMap(objects) {
    // Draw multiple objects to canvas
    objects.forEach(o => {
      this.addToMap(o);
    });
  }

  addToMap(moveableObject) {
    this.ctx.save();    
    if (moveableObject instanceof Character) {
      this.drawRotatedObject(moveableObject);
    } else {
      this.drawObject(moveableObject);
    }
    this.ctx.restore();
  }

  drawRotatedObject(moveableObject) {
    this.moveToObjectCenter(moveableObject);
    this.applyDirectionAndRotation(moveableObject);
    this.moveToObjectTopLeft(moveableObject);
    this.drawObjectAtOrigin(moveableObject);
  }

  moveToObjectCenter(moveableObject) {
    this.ctx.translate(
      moveableObject.x + moveableObject.width/2, 
      moveableObject.y + moveableObject.height/2
    );
  }

  applyDirectionAndRotation(moveableObject) {
    if (moveableObject.otherDirection) {
      this.ctx.scale(-1, 1);
    }
    this.ctx.rotate(moveableObject.rotation * Math.PI / 180);
  }

  moveToObjectTopLeft(moveableObject) {
    this.ctx.translate(
      -(moveableObject.width/2), 
      -(moveableObject.height/2)
    );
  }

  drawObjectAtOrigin(moveableObject) {
    moveableObject.draw(this.ctx, 0, 0);
    moveableObject.drawFrame(this.ctx, 0, 0);
  }

  drawObject(moveableObject) {
    if (moveableObject.otherDirection) {
      this.flipImageHorizontally(moveableObject);
    }
    this.drawAndFrameObject(moveableObject);
    if (moveableObject.otherDirection) {
      this.restoreOriginalDirection(moveableObject);
    }
  }

  flipImageHorizontally(moveableObject) {
    this.ctx.save();
    this.ctx.translate(moveableObject.width, 0);
    this.ctx.scale(-1, 1);
    moveableObject.x = moveableObject.x * -1;
  }

  drawAndFrameObject(moveableObject) {
    moveableObject.draw(this.ctx);
    moveableObject.drawFrame(this.ctx);
  }

  restoreOriginalDirection(moveableObject) {
    moveableObject.x = moveableObject.x * -1;
    this.ctx.restore();
  }
}