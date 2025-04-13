class Endboss extends MoveableObject {
  // Final boss enemy
  height = 500;
  y = -70;
  width = 350;
  hadFirstContact = false; // Flag to check if the endboss has made first contact with the character
  visible = false; // Add this flag to track visibility

  IMAGES_SPAWNING = [
    // Spawning animation frames
    'img/2.Enemy/3.Final_Enemy/1.Introduce/1.png',
    'img/2.Enemy/3.Final_Enemy/1.Introduce/2.png',
    'img/2.Enemy/3.Final_Enemy/1.Introduce/3.png',
    'img/2.Enemy/3.Final_Enemy/1.Introduce/4.png',
    'img/2.Enemy/3.Final_Enemy/1.Introduce/5.png',
    'img/2.Enemy/3.Final_Enemy/1.Introduce/6.png',
    'img/2.Enemy/3.Final_Enemy/1.Introduce/7.png',
    'img/2.Enemy/3.Final_Enemy/1.Introduce/8.png',
    'img/2.Enemy/3.Final_Enemy/1.Introduce/9.png',
    'img/2.Enemy/3.Final_Enemy/1.Introduce/10.png'
  ];

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
    super().loadImage('img/2.Enemy/3.Final_Enemy/1.Introduce/1.png'); // Load first image but don't show yet
    this.loadImages(this.IMAGES_STAND);
    this.loadImages(this.IMAGES_SPAWNING);
    this.x = 2400;
    this.offsetTop = 125;
    this.offsetBottom = 70;
    this.offsetLeft = 15;
    this.offsetRight = 15;
    this.animate();   
  }  

  animate() {
    this.animationFrame = 0;
    this.animationStarted = false;
    setStoppableInterval(() => {
      if (!isGameActive) return;      
      console.log('Character X:', world.character.x); // Debugging line to check character position
      this.checkFirstContact();
      if (this.visible) {
        this.playAnimations();
      }
    }, 120);
  }

  checkFirstContact() {
    if (world.character.x > 2000 && !this.hadFirstContact) {
      this.visible = true; // Make boss visible
      this.hadFirstContact = true; // Set the flag to true after first contact
      this.animationStarted = true; // Start animation sequence
      this.animationFrame = 0; // Ensure we start from the beginning of the spawning animation
    }
  }

  playAnimations() {
    if (this.animationStarted && this.animationFrame < 10) {
      // Play spawning animation first
      this.playAnimation(this.IMAGES_SPAWNING);
    } else {
      // Switch to standing animation after spawning completes
      this.playAnimation(this.IMAGES_STAND);
    }
    if (this.animationStarted) this.animationFrame++;
  }

  // Override the draw method from parent class
  draw(ctx) {
    if (this.visible) {
      super.draw(ctx); // Only draw if visible
    }
  }
}