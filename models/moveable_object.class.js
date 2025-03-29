class MoveableObject {
  x = 120;
  y = 200;
  img;
  height = 100;
  width = 100;
  speed = 0.15;
  imageCache = {};
  currentImage = 0;
  otherDirection = false;

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  loadImages(array) {
    array.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

  playAnimationSwimming(images) {
    let index = this.currentImage % this.IMAGES_SWIMMING.length; 
    let path = images[index];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  playAnimationStand(images) {
      let index = this.currentImage % this.IMAGES_STAND.length; 
      let path = images[index];
      this.img = this.imageCache[path];
      this.currentImage++;
  }

  moveRight() {
    console.log("Moving Right");
  }

  moverLeft() {
    setInterval(() => {
      this.x -= this.speed;
    }, 1000 / 60);
  }
}