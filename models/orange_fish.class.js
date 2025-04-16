class OrangeFish extends DestructibleEnemy {
  // Enemy fish with swimming animation
  width = 70;
  x = 0;
  height = 70;
  y = 200;
  
  IMAGES_SWIMMING = [
    // Swimming animation frames
    './img/2.Enemy/1.Puffer_fish(3_color_options)/2.transition/2.transition3.png',
    './img/2.Enemy/1.Puffer_fish(3_color_options)/1.Swim/2.swim2.png',
    './img/2.Enemy/1.Puffer_fish(3_color_options)/1.Swim/2.swim1.png',
    './img/2.Enemy/1.Puffer_fish(3_color_options)/1.Swim/2.swim2.png',
    './img/2.Enemy/1.Puffer_fish(3_color_options)/1.Swim/2.swim3.png',
    './img/2.Enemy/1.Puffer_fish(3_color_options)/1.Swim/2.swim4.png',
    './img/2.Enemy/1.Puffer_fish(3_color_options)/1.Swim/2.swim5.png',
    './img/2.Enemy/1.Puffer_fish(3_color_options)/1.Swim/2.swim4.png',
  ];

  IMAGES_DEAD = [
    // Dead animation frames
    './img/2.Enemy/1.Puffer_fish(3_color_options)/4.DIE/dead_fish_2_1.png',
    './img/2.Enemy/1.Puffer_fish(3_color_options)/4.DIE/dead_fish_2_2.png',
    './img/2.Enemy/1.Puffer_fish(3_color_options)/4.DIE/dead_fish_2_3.png',
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
    this.offsetBottom = 20; 
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