let level_1;

function initLevel() {
  level_1 = new Level(
  [
    // Add coins to the level
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    // Add poison bottles to the level
    new Posion(),
    new Posion(),
    new Posion(),
    new Posion(),
    new Posion(),
    new Posion(),
    // Array of enemies (fish and endboss)
    new GreenFish(), 
    new GreenFish(), 
    new OrangeFish(),
    new OrangeFish(),
    new RedFish(),
    new RedFish(),
    new LilaJellyFish(),
    new LilaJellyFish(),
    new YellowJellyFish(),
    new YellowJellyFish(),
    new GreenJellyFish(), // strobg enemy
    new GreenJellyFish(), // strobg enemy
    new PinkJellyFish(), // strong enemy
    new PinkJellyFish(), // strong enemy
    new Endboss(),
  ],
  [
    // Array of background objects creating parallax layers
    // Multiple layers repeated at different x positions for continuous background
    new BackgroundObject("./img/3.Background/Layers/5. Water/L2.png", -720),
    new BackgroundObject("./img/3.Background/Layers/4.Fondo 2/L2.png", -720),
    new BackgroundObject("./img/3.Background/Layers/3.Fondo 1/D2.png", -720),
    new BackgroundObject("./img/3.Background/Layers/2. Floor/L2.png", -720),
    new BackgroundObject("./img/3.Background/Layers/1. Light/2.png", -720),

    new BackgroundObject("./img/3.Background/Layers/5. Water/L1.png", 0),
    new BackgroundObject("./img/3.Background/Layers/4.Fondo 2/L1.png", 0),
    new BackgroundObject("./img/3.Background/Layers/3.Fondo 1/D1.png", 0),
    new BackgroundObject("./img/3.Background/Layers/2. Floor/L1.png", 0),
    new BackgroundObject("./img/3.Background/Layers/1. Light/1.png", 0),
    new BackgroundObject("./img/3.Background/Layers/5. Water/L2.png", 720),
    new BackgroundObject("./img/3.Background/Layers/4.Fondo 2/L2.png", 720),
    new BackgroundObject("./img/3.Background/Layers/3.Fondo 1/D2.png", 720),
    new BackgroundObject("./img/3.Background/Layers/2. Floor/L2.png", 720),
    new BackgroundObject("./img/3.Background/Layers/1. Light/2.png", 720),

    new BackgroundObject("./img/3.Background/Layers/5. Water/L1.png", 720 * 2),
    new BackgroundObject("./img/3.Background/Layers/4.Fondo 2/L1.png", 720 * 2),
    new BackgroundObject("./img/3.Background/Layers/3.Fondo 1/D1.png", 720 * 2),
    new BackgroundObject("./img/3.Background/Layers/2. Floor/L1.png", 720 * 2),
    new BackgroundObject("./img/3.Background/Layers/1. Light/1.png", 720 * 2),
    new BackgroundObject("./img/3.Background/Layers/5. Water/L2.png", 720 * 3),
    new BackgroundObject("./img/3.Background/Layers/4.Fondo 2/L2.png", 720 * 3),
    new BackgroundObject("./img/3.Background/Layers/3.Fondo 1/D2.png", 720 * 3),
    new BackgroundObject("./img/3.Background/Layers/2. Floor/L2.png", 720 * 3),
    new BackgroundObject("./img/3.Background/Layers/1. Light/2.png", 720 * 3),
  ]);
}