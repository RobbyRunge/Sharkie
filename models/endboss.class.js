class Endboss extends MoveableObject {
  // Final boss enemy
  height = 400;
  y = -40;
  width = 250;

  IMAGES_STAND = [
    // Floating animation frames
    './img/2.Enemy/3.Final_Enemy/2.floating/1.png',
    './img/2.Enemy/3.Final_Enemy/2.floating/2.png',
    './img/2.Enemy/3.Final_Enemy/2.floating/3.png',
    './img/2.Enemy/3.Final_Enemy/2.floating/4.png',
    './img/2.Enemy/3.Final_Enemy/2.floating/5.png',
    './img/2.Enemy/3.Final_Enemy/2.floating/6.png',
    './img/2.Enemy/3.Final_Enemy/2.floating/7.png',
    './img/2.Enemy/3.Final_Enemy/2.floating/8.png',
    './img/2.Enemy/3.Final_Enemy/2.floating/9.png',
    './img/2.Enemy/3.Final_Enemy/2.floating/10.png',
    './img/2.Enemy/3.Final_Enemy/2.floating/11.png',
    './img/2.Enemy/3.Final_Enemy/2.floating/12.png',
    './img/2.Enemy/3.Final_Enemy/2.floating/13.png',
  ];

  constructor() {
    // Initialize position and animations
    super().loadImage(this.IMAGES_STAND[0]);
    this.loadImages(this.IMAGES_STAND);
    this.x = 700;
    this.animate();
  }

  animate() {
    // Play floating animation
    setInterval(() => {
      this.playAnimationStand(this.IMAGES_STAND);
    }, 120);
  }
};