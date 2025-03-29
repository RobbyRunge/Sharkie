class Endboss extends MoveableObject {
  height = 400;
  y = -40;
  width = 250;

  IMAGES_STAND = [
    '../img/2.enemy/3 Final Enemy/2.floating/1.png',
    '../img/2.enemy/3 Final Enemy/2.floating/2.png',
    '../img/2.enemy/3 Final Enemy/2.floating/3.png',
    '../img/2.enemy/3 Final Enemy/2.floating/4.png',
    '../img/2.enemy/3 Final Enemy/2.floating/5.png',
    '../img/2.enemy/3 Final Enemy/2.floating/6.png',
    '../img/2.enemy/3 Final Enemy/2.floating/7.png',
    '../img/2.enemy/3 Final Enemy/2.floating/8.png',
    '../img/2.enemy/3 Final Enemy/2.floating/9.png',
    '../img/2.enemy/3 Final Enemy/2.floating/10.png',
    '../img/2.enemy/3 Final Enemy/2.floating/11.png',
    '../img/2.enemy/3 Final Enemy/2.floating/12.png',
    '../img/2.enemy/3 Final Enemy/2.floating/13.png',
  ];

  constructor() {
    super().loadImage(this.IMAGES_STAND[0]);
    this.loadImages(this.IMAGES_STAND);
    this.x = 700;
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.playAnimationStand(this.IMAGES_STAND);
    }, 120);
  }
};