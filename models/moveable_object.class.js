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
  // Replace symmetric offsets with directional offsets
  offsetX = 0;
  offsetY = 0;
  offsetTop = 0;
  offsetBottom = 0;
  offsetLeft = 0;
  offsetRight = 0;
  energy = 100;

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
      const leftOffset = this.offsetLeft || this.offsetX;
      const rightOffset = this.offsetRight || this.offsetX;
      const topOffset = this.offsetTop || this.offsetY;
      const bottomOffset = this.offsetBottom || this.offsetY;
      ctx.beginPath();
      ctx.lineWidth = "0.5";
      ctx.strokeStyle = "red";
      ctx.rect(
        x + leftOffset,
        y + topOffset,
        this.width - leftOffset - rightOffset,
        this.height - topOffset - bottomOffset
      );
      ctx.stroke();
    }
  }

  // character is colliding chicken
  isColliding(moveableObject) {
    const leftOffset = this.offsetLeft || this.offsetX;
    const rightOffset = this.offsetRight || this.offsetX;
    const topOffset = this.offsetTop || this.offsetY;
    const bottomOffset = this.offsetBottom || this.offsetY;
    return (this.x + this.width - rightOffset) >= moveableObject.x &&
            (this.x + leftOffset) <= (moveableObject.x + moveableObject.width) &&
            (this.y + this.height - bottomOffset) >= moveableObject.y &&
            (this.y + topOffset) <= (moveableObject.y + moveableObject.height);
  }

  hit() {
    this.playAnimation(this.IMAGES_HIT);
    this.energy -= 5;
    if (this.energy < 0) {
      this.energy = 0
    }
  }

  isDead() {
    return this.energy == 0;
  }

  playAnimation(images) {
    // Play any animation sequence
    let index = this.currentImage % images.length; 
    let path = images[index];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

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