let canvas; // Main canvas element
let world; // Game world object
let keyboard = new Keyboard(); // Input handler

function init() {
  // Initialize game by creating world with canvas and keyboard
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);
}

// Event listeners for keydown events - set corresponding keyboard properties to true
window.addEventListener('keydown', (event => {
  if(event.code == 'ArrowLeft') {
    keyboard.LEFT = true;
  }
  if(event.code == 'ArrowRight') {
    keyboard.RIGHT = true;
  }
  if(event.code == 'ArrowUp') {
    keyboard.UP = true;
  }
  if(event.code == 'ArrowDown') {
    keyboard.DOWN = true;
  }
  if(event.code == 'Space') {
    keyboard.SPACE = true;
  }
}));

// Event listeners for keyup events - set corresponding keyboard properties to false
window.addEventListener('keyup', (event => {
  if(event.code == 'ArrowLeft') {
    keyboard.LEFT = false;
  }
  if(event.code == 'ArrowRight') {
    keyboard.RIGHT = false;
  }
  if(event.code == 'ArrowUp') {
    keyboard.UP = false;
  }
  if(event.code == 'ArrowDown') {
    keyboard.DOWN = false;
  }
  if(event.code == 'Space') {
    keyboard.SPACE = false;
  }
}));