function setup() {
  createCanvas(500, 400);
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