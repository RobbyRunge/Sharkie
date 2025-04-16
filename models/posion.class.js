class Posion extends MoveableObject {
  IMAGES_POSION = [
    './img/4.Marcadores/Posión/Animada/1.png',
    './img/4.Marcadores/Posión/Animada/2.png',
    './img/4.Marcadores/Posión/Animada/3.png',
    './img/4.Marcadores/Posión/Animada/4.png',
    './img/4.Marcadores/Posión/Animada/5.png',
    './img/4.Marcadores/Posión/Animada/6.png',
    './img/4.Marcadores/Posión/Animada/7.png',
    './img/4.Marcadores/Posión/Animada/8.png'
  ];

  constructor() {
    super();
    this.loadImage(this.IMAGES_POSION[0]);
    this.loadImages(this.IMAGES_POSION);
    // Position at a random location in the game world
    this.x = 300 + Math.random() * 2000; // Random x position
    this.y = 50 + Math.random() * 300;   // Random y position
    // Size appropriate for collectible
    this.width = 60;
    this.height = 70;
    // Set collision boundaries
    this.offsetTop = 10;
    this.offsetBottom = 10;
    this.offsetLeft = 10;
    this.offsetRight = 10;
    // Ensure this is set to make collision detection work properly
    this.isCollectible = true;
    this.animate();
  }

  animate() {
    setStoppableInterval(() => {
      if (isGameActive) {
        this.playAnimation(this.IMAGES_POSION);
      }
    }, 1000 / 10);
  }
}