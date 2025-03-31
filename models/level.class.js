class Level {
  // Level structure with enemies and background
  enemies; // Array of enemy objects
  backgroundObject; // Array of background elements
  level_end_x = 2250; // Right boundary of level

  constructor(enemies, backgroundObject) {
    // Initialize level with enemies and background objects
    this.enemies = enemies;
    this.backgroundObject = backgroundObject;
  }
}