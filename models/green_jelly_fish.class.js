class GreenJellyFish extends DestructibleEnemy {
  // Enemy fish with swimming animation
  width = 80;
  x = 0;
  height = 80;
  y = 200;
  
  IMAGES_SWIMMING = [
    // Swimming animation frames
    './img/2.Enemy/2.Jelly_fish/Súper dangerous/Green 3.png',
    './img/2.Enemy/2.Jelly_fish/Súper dangerous/Green 4.png',
    './img/2.Enemy/2.Jelly_fish/Súper dangerous/Green 1.png',
    './img/2.Enemy/2.Jelly_fish/Súper dangerous/Green 2.png',
  ];

  IMAGES_DEAD = [
    // Dead animation frames
    './img/2.Enemy/2.Jelly_fish/Dead/green/g1.png',
    './img/2.Enemy/2.Jelly_fish/Dead/green/g2.png',
    './img/2.Enemy/2.Jelly_fish/Dead/green/g3.png',
    './img/2.Enemy/2.Jelly_fish/Dead/green/g4.png',
  ];

  constructor() {
    // Initialize with random position and speed
    super();
    this.loadImage(this.IMAGES_SWIMMING[0]);
    this.x = 200 + Math.random() * 2500;
    this.y = 0 + Math.random() * 410;
    this.speed = 0.15 + Math.random() * 0.5;
    // Use specific directional offsets
    this.offsetLeft = 4;
    this.offsetRight = 6;
    this.offsetTop = 0;
    this.offsetBottom = 0; 
    this.loadImages(this.IMAGES_SWIMMING);
    this.loadImages(this.IMAGES_DEAD);
    this.startMovement();
    this.animate();
  }

  animate() {
    this.startAnimation();
  }

  startAnimation() {
    setStoppableInterval(() => {
      if (isGameActive) {
        if (this.isDying) {
          this.playDeathAnimation();
        } else { 
          this.playAnimation(this.IMAGES_SWIMMING);
        }
      }
    }, 120);
  }
}