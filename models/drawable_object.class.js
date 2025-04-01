class DrawableObject {
  img; // Image object
  imageCache = {}; // Storage for preloaded images
  currentImage = 0; // Current animation frame
  x = 120; // Default horizontal position
  y = 200; // Default vertical position
  height = 100; // Default height
  width = 100; // Default width

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
}
