class MoveableObject {
  x = 120;
  y = 200;
  img;
  height = 100;
  width = 100;
  speed = 0.15;
  imageCache = {};
  currentImage = 0;

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

  moveRight() {
    console.log("Moving Right");
  }

  moverLeft() {
    setInterval(() => {
      this.x -= this.speed;
    }, 1000 / 60);
  }
}