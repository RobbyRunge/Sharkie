class World {
  // Game world that manages all objects and rendering
  character = new Character(); // Player character
  level = level_1; // Current level
  canvas; // Game canvas
  ctx; // Canvas 2D context
  keyboard; // Keyboard input reference
  camera_x = 0; // Camera horizontal position

  constructor(canvas, keyboard) {
    // Initialize world with canvas and input
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
  }

  setWorld() {
    // Connect character to world for access to world properties
    this.character.world = this;
  }

  draw() {
    // Main render loop - clear canvas, apply camera transform, draw objects
    // Uses requestAnimationFrame for smooth animation
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.translate(this.camera_x, 0);
    
    this.addObjectsToMap(this.level.backgroundObject);
    this.addToMap(this.character);
    this.addObjectsToMap(this.level.enemies);
    
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
    // Draw single object to canvas with direction handling
    if (moveableObject.otherDirection) {
      this.flipImage(moveableObject)
    }
    moveableObject.draw(this.ctx)
    moveableObject.drawFrame(this.ctx)
    if (moveableObject.otherDirection) {
      this.flipImageBack(moveableObject)
    }
  }

  flipImage(moveableObject) {
    this.ctx.save();
    this.ctx.translate(moveableObject.width, 0);
    this.ctx.scale(-1, 1);
    moveableObject.x = moveableObject.x * -1;
  }

  flipImageBack(moveableObject) {
    moveableObject.x = moveableObject.x * -1;
    this.ctx.restore();
  }
}