function setup() {
  createCanvas(500, 400);
  backgroundMusic.loop();
}

function draw() {
  background(roadImage);
  showActor();
  showCar();
  moveCar1();
  moveActor();
  resetCarPosition();
  collideValidator();
  showScore();
  scorepoints();
}