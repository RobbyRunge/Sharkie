class MoveableObject {
  x = 120;
  y = 200;
  img;
  height = 100;
  width = 100;

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  moveRight() {
    console.log("Moving Right");
  }

  moverLeft() {}
}