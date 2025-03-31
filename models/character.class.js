class Character extends MoveableObject{
  // Player character with controls and animations
  
  width = 200;
  x = 0;
  height = 200;
  y = 100;
  world;
  speed = 1;

  IMAGES_STAND = [
    // Standing/idle animation frames
    './img/1.Sharkie/1.IDLE/1.png',
    './img/1.Sharkie/1.IDLE/2.png',
    './img/1.Sharkie/1.IDLE/3.png',
    './img/1.Sharkie/1.IDLE/4.png',
    './img/1.Sharkie/1.IDLE/5.png',
    './img/1.Sharkie/1.IDLE/6.png',
    './img/1.Sharkie/1.IDLE/7.png',
    './img/1.Sharkie/1.IDLE/8.png',
    './img/1.Sharkie/1.IDLE/9.png',
    './img/1.Sharkie/1.IDLE/10.png',
    './img/1.Sharkie/1.IDLE/11.png',
    './img/1.Sharkie/1.IDLE/12.png',
    './img/1.Sharkie/1.IDLE/13.png',
    './img/1.Sharkie/1.IDLE/14.png',
    './img/1.Sharkie/1.IDLE/15.png',
    './img/1.Sharkie/1.IDLE/16.png',
    './img/1.Sharkie/1.IDLE/17.png',
    './img/1.Sharkie/1.IDLE/18.png'
  ];

  IMAGES_SWIMMING = [
    // Swimming animation frames
    './img/1.Sharkie/3.Swim/1.png',
    './img/1.Sharkie/3.Swim/2.png',
    './img/1.Sharkie/3.Swim/3.png',
    './img/1.Sharkie/3.Swim/4.png',
    './img/1.Sharkie/3.Swim/5.png',
    './img/1.Sharkie/3.Swim/6.png'
  ];

  // IMAGES_SLEEP = [
  //   // Sleeping animation frames
  //   './img/1.Sharkie/2.Long_IDLE/i1.png',
  //   './img/1.Sharkie/2.Long_IDLE/I2.png',
  //   './img/1.Sharkie/2.Long_IDLE/I3.png',
  //   './img/1.Sharkie/2.Long_IDLE/I4.png',
  //   './img/1.Sharkie/2.Long_IDLE/I5.png',
  //   './img/1.Sharkie/2.Long_IDLE/I6.png',
  //   './img/1.Sharkie/2.Long_IDLE/I7.png',
  //   './img/1.Sharkie/2.Long_IDLE/I8.png',
  //   './img/1.Sharkie/2.Long_IDLE/I9.png',
  //   './img/1.Sharkie/2.Long_IDLE/I10.png',
  //   './img/1.Sharkie/2.Long_IDLE/I11.png',
  //   './img/1.Sharkie/2.Long_IDLE/I12.png',
  //   './img/1.Sharkie/2.Long_IDLE/I13.png',
  //   './img/1.Sharkie/2.Long_IDLE/I14.png'
  // ]
  
  constructor() {
    // Initialize character, load animations
    super().loadImage(this.IMAGES_STAND[0]);
    this.loadImages(this.IMAGES_STAND);
    this.loadImages(this.IMAGES_SWIMMING);
    this.animate();
  }

  animate() {
    // Handle character movement based on keyboard input
    // Update camera position to follow character
    // Switch between animations based on movement state
    setInterval(() => {
      if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
        this.x += this.speed;
        this.otherDirection = false;
      }
      if (this.world.keyboard.LEFT && this.x > 0) {
        this.x -= this.speed;
        this.otherDirection = true;
      }
      if (this.world.keyboard.UP && this.y > -90) {
        this.y -= this.speed;
      }
      if (this.world.keyboard.DOWN && this.y < 320) {
        this.y += this.speed;
      }
      this.world.camera_x = -this.x + 100;
    }, 1000 / 160);

    setInterval(() => {
      if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN) {
        this.playAnimationSwimming(this.IMAGES_SWIMMING);
      } else {
        this.playAnimationStand(this.IMAGES_STAND);
      }
    }, 100);
  };

  jump() {
    // Jump functionality (currently empty)
  }
}