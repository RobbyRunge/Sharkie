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
    try {
      ctx.drawImage(this.img, x, y, this.width, this.height);
    } catch (error) {
      console.warn('Error loading image', e);
      console.log('Could not load Image', this.img.src);
    }
    
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
}
