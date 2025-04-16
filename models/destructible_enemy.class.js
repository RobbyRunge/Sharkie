class DestructibleEnemy extends MoveableObject {
    // Common properties and methods for destructible enemies
    isDying = false;
    currentDeadFrame = 0;
    deathAnimationComplete = false;
    
    die() {
        this.isDying = true;
        this.currentDeadFrame = 0;
        this.deathAnimationComplete = false;
    }
    
    playDeathAnimation() {
        if (this.currentDeadFrame < this.IMAGES_DEAD.length) {
            this.img = this.imageCache[this.IMAGES_DEAD[this.currentDeadFrame]];
            this.currentDeadFrame++;
        } else if (!this.deathAnimationComplete) {
            this.deathAnimationComplete = true;
        }
    }
}