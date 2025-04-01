class Fish extends MoveableObject {
  // Enemy fish with swimming animation
  width = 80;
  x = 0;
  height = 80;
  y = 200;
  
  IMAGES_SWIMMING = [
    // Swimming animation frames
    './img/2.Enemy/1.Puffer_fish(3_color_options)/1.Swim/1.swim1.png',
    './img/2.Enemy/1.Puffer_fish(3_color_options)/1.Swim/1.swim2.png',
    './img/2.Enemy/1.Puffer_fish(3_color_options)/1.Swim/1.swim3.png',
    './img/2.Enemy/1.Puffer_fish(3_color_options)/1.Swim/1.swim4.png',
    './img/2.Enemy/1.Puffer_fish(3_color_options)/1.Swim/1.swim5.png',
    './img/2.Enemy/1.Puffer_fish(3_color_options)/1.Swim/1.swim4.png',
    './img/2.Enemy/1.Puffer_fish(3_color_options)/2.transition/1.transition3.png',
    './img/2.Enemy/1.Puffer_fish(3_color_options)/1.Swim/1.swim2.png',
  ];

  constructor() {
    // Initialize with random position and speed
    super().loadImage(this.IMAGES_SWIMMING[0]);
    this.x = 200 + Math.random() * 500;
    this.y = 0 + Math.random() * 410;
    this.speed = 0.15 + Math.random() * 0.5;
    
    // Use specific directional offsets
    this.offsetLeft = 4;
    this.offsetRight = 6;
    this.offsetTop = 0;
    this.offsetBottom = 20; 
    
    this.loadImages(this.IMAGES_SWIMMING);
    this.animate();
  };

  animate() {
    // Move left and play swimming animation
    // this.moveLeft();
    setInterval(() => {
      this.playAnimationSwimming(this.IMAGES_SWIMMING)
    }, 120);
  };
}