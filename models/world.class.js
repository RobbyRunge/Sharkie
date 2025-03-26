class World {
  character = new Character();
  enemies = [
    new Fish(), 
    new Fish(), 
    new Fish()];
  backgroundObject = [
    new BackgroundObject("../img/3. Background/Dark/1.png", 0)
  ]
  canvas;
  ctx;

  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.draw();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    this.addObjectsToMap(this.backgroundObject);
    this.addToMap(this.character);
    this.addObjectsToMap(this.enemies);
    

    // Draw() wird immer wieder aufgerufen
    let self = this;
    requestAnimationFrame(function() {
      self.draw();
    });
  }

  addObjectsToMap(objects) {
    objects.forEach(o => {
      this.addToMap(o);
    });
  }

  addToMap(moveableObject) {
    this.ctx.drawImage(moveableObject.img, moveableObject.x, moveableObject.y, moveableObject.width, moveableObject.height)
  }
}