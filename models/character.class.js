class Character extends MoveableObject{
  width = 200;
  x = 0;
  height = 200;
  y = 110;
  world;
  speed = 1;

  IMAGES_STAND = [
    '../img/1.Sharkie/1.IDLE/1.png',
    '../img/1.Sharkie/1.IDLE/2.png',
    '../img/1.Sharkie/1.IDLE/3.png',
    '../img/1.Sharkie/1.IDLE/4.png',
    '../img/1.Sharkie/1.IDLE/5.png',
    '../img/1.Sharkie/1.IDLE/6.png',
    '../img/1.Sharkie/1.IDLE/7.png',
    '../img/1.Sharkie/1.IDLE/8.png',
    '../img/1.Sharkie/1.IDLE/9.png',
    '../img/1.Sharkie/1.IDLE/10.png',
    '../img/1.Sharkie/1.IDLE/11.png',
    '../img/1.Sharkie/1.IDLE/12.png',
    '../img/1.Sharkie/1.IDLE/13.png',
    '../img/1.Sharkie/1.IDLE/14.png',
    '../img/1.Sharkie/1.IDLE/15.png',
    '../img/1.Sharkie/1.IDLE/16.png',
    '../img/1.Sharkie/1.IDLE/17.png',
    '../img/1.Sharkie/1.IDLE/18.png'
  ];

  IMAGES_SWIMMING = [
    '../img/1.Sharkie/3.Swim/1.png',
    '../img/1.Sharkie/3.Swim/2.png',
    '../img/1.Sharkie/3.Swim/3.png',
    '../img/1.Sharkie/3.Swim/4.png',
    '../img/1.Sharkie/3.Swim/5.png',
    '../img/1.Sharkie/3.Swim/6.png'
  ];
  constructor() {
    super().loadImage(this.IMAGES_STAND[0]);
    this.loadImages(this.IMAGES_STAND);
    this.loadImages(this.IMAGES_SWIMMING);
    this.animate();
  }

  animate() {
    setInterval(() => {
      if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
        this.x += this.speed;
        this.otherDirection = false;
      }
      if (this.world.keyboard.LEFT && this.x > 0) {
        this.x -= this.speed;
        this.otherDirection = true;
      }
      this.world.camera_x = -this.x + 100;
    }, 1000 / 160);

    setInterval(() => {
      if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
        this.playAnimationSwimming(this.IMAGES_SWIMMING);
      } else {
        this.playAnimationStand(this.IMAGES_STAND);
      }
    }, 100);
  };

  jump() {

  }
}