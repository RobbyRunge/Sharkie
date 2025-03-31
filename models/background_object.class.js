class BackgroundObject extends MoveableObject {
  // Background elements for parallax effect
  width = 720; // Background element width
  height = 480; // Background element height
  
  constructor(imagePath, x) {
    // Initialize with image and position at bottom of screen
    super().loadImage(imagePath);
    this.x = x;
    this.y = 480 - this.height;
  }
}