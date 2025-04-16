class LilaJellyFish extends DestructibleEnemy {
  // Enemy fish with swimming animation
  width = 50;
  x = 0;
  height = 50;
  y = 200;
  
  IMAGES_SWIMMING = [
    // Swimming animation frames
    './img/2.Enemy/2.Jelly_fish/Regular damage/Yellow 2.png',
    './img/2.Enemy/2.Jelly_fish/Regular damage/Yellow 3.png',
    './img/2.Enemy/2.Jelly_fish/Regular damage/Yellow 4.png',
    './img/2.Enemy/2.Jelly_fish/Regular damage/Yellow 1.png'
  ];

  IMAGES_DEAD = [
    // Dead animation frames
    './img/2.Enemy/2.Jelly_fish/Dead/Yellow/y1.png',
    './img/2.Enemy/2.Jelly_fish/Dead/Yellow/y2.png',
    './img/2.Enemy/2.Jelly_fish/Dead/Yellow/y3.png',
    './img/2.Enemy/2.Jelly_fish/Dead/Yellow/y4.png',
  ];

  constructor() {
    // Initialize with random position and speed
    super();
    this.loadImage(this.IMAGES_SWIMMING[0]);
    this.x = 200 + Math.random() * 500;
    this.y = 0 + Math.random() * 410;
    this.speed = 0.15 + Math.random() * 0.5;
    // Use specific directional offsets
    this.offsetLeft = 4;
    this.offsetRight = 6;
    this.offsetTop = 0;
    this.offsetBottom = 0; 
    this.loadImages(this.IMAGES_SWIMMING);
    this.loadImages(this.IMAGES_DEAD);
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