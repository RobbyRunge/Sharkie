class Fish extends MoveableObject {
  width = 80;
  x = 0;
  height = 80;
  y = 200;
  
  IMAGES_SWIMMING = [
    '../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
    '../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
    '../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
    '../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
    '../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png',
    '../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
    '../img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition3.png',
    '../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
  ];

  constructor() {
    super().loadImage(this.IMAGES_SWIMMING[0]);
    this.x = 200 + Math.random() * 500;
    this.speed = 0.15 + Math.random() * 0.5;
    this.loadImages(this.IMAGES_SWIMMING);
    this.animate();
  };

  animate() {
    this.moverLeft();
    setInterval(() => {
      this.playAnimationSwimming(this.IMAGES_SWIMMING)
    }, 120);
  };
}