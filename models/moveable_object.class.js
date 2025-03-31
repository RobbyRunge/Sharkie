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

  draw(ctx, x = this.x, y = this.y) {
    ctx.drawImage(this.img, x, y, this.width, this.height);
  }

  drawFrame(ctx, x = this.x, y = this.y) {
    if (this instanceof Character || this instanceof Fish || this instanceof Endboss) {
      ctx.beginPath();
      ctx.lineWidth = "1";
      ctx.strokeStyle = "red";
      ctx.rect(x, y, this.width, this.height);
      ctx.stroke();
    }
  }

  // character is colliding chicken
  isColliding (moveableObject) {
    return  this.x + this.width > moveableObject.x &&
            this.y + this.height > moveableObject.y &&
            this.x < moveableObject.x &&
            this.y < moveableObject.y + moveableObject.height;
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

  // playAnimationSleep(images) {
  //   // Play sleeping animation sequence
  //   let index = this.currentImage % this.IMAGES_SLEEP.length; 
  //   let path = images[index];
  //   this.img = this.imageCache[path];
  //   this.currentImage++;
  // }

  moveRight() {
    // Move object right
    console.log("Moving Right");
  }

  moveLeft() {
    // Move object left continuously
    setInterval(() => {
      this.x -= this.speed;
    }, 1000 / 60);
  }
}