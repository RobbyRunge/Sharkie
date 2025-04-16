class Coin extends MoveableObject {
  IMAGES_COIN = [
    './img/4.Marcadores/1. Coins/1.png',
    './img/4.Marcadores/1. Coins/2.png',
    './img/4.Marcadores/1. Coins/3.png',
    './img/4.Marcadores/1. Coins/4.png',
  ];

  constructor() {
    super();
    this.loadImage(this.IMAGES_COIN[0]);
    this.loadImages(this.IMAGES_COIN);
    
    // Position at a random location in the game world
    this.x = 300 + Math.random() * 2000; // Random x position
    this.y = 50 + Math.random() * 300;   // Random y position
    
    // Size appropriate for collectible
    this.width = 40;
    this.height = 40;
    
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
        this.playAnimation(this.IMAGES_COIN);
      }
    }, 1000 / 10);
  }
}