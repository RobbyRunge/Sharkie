class CoinBar extends DrawableObject {
  percentage = 100;

  IMAGES_COINS = [
    './img/4.Marcadores/green/Coin/0.png',
    './img/4.Marcadores/green/Coin/20.png',
    './img/4.Marcadores/green/Coin/40.png',
    './img/4.Marcadores/green/Coin/60.png',
    './img/4.Marcadores/green/Coin/80.png',
    './img/4.Marcadores/green/Coin/100.png',
  ];

  constructor() {
    super();
    this.loadImages(this.IMAGES_COINS);
    this.x = 10;
    this.y = 50;
    this.width = 200;
    this.height = 60;
    this.setPercentage(0);
  }

  // stePercentage(50);
  setPercentage(percentage) {
    this.percentage = percentage;
    let path = this.IMAGES_COINS[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }  
    
  resolveImageIndex() {
    console.log(this.percentage);
    if (this.percentage >= 100) {
      return 5;
    } else if (this.percentage >= 80) {
      return 4;
    } else if (this.percentage >= 60) {
      return 3;
    } else if (this.percentage >= 40) {
      return 2;
    } else if (this.percentage >= 20) {
      return 1;
    } else {
      return 0;
    }
  }
}
