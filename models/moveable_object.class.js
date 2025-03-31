class MoveableObject {
  // Base class for all movable game entities
  x = 120; // Default horizontal position
  y = 200; // Default vertical position
  img; // Image object
  height = 100; // Default height
  width = 100; // Default width
  speed = 0.15; // Default movement speed
  imageCache = {}; // Storage for preloaded images
  currentImage = 0; // Current animation frame
  otherDirection = false; // Direction flag for flipping images
  speedY = 0.1; // Vertical movement speed
  acceleration = 0.01; // Gravity acceleration

  applyGravity() {
    // Apply gravity effect to object
    setInterval(() => {
      if (this.isAbobeGround()) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000 / 25);
  }

  isAbobeGround() {
    return this.y < 315;
  }

  loadImage(path) {
    // Load a single image
    this.img = new Image();
    this.img.src = path;
  }

  loadImages(array) {
    // Preload multiple images for animations
    array.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

  playAnimationSwimming(images) {
    // Play swimming animation sequence
    let index = this.currentImage % this.IMAGES_SWIMMING.length; 
    let path = images[index];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  playAnimationStand(images) {
    // Play standing animation sequence
    let index = this.currentImage % this.IMAGES_STAND.length; 
    let path = images[index];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  moveRight() {
    // Move object right
    console.log("Moving Right");
  }

  moverLeft() {
    // Move object left continuously
    setInterval(() => {
      this.x -= this.speed;
    }, 1000 / 60);
  }
}