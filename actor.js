//variaves do ator
let xActor = 85;
let yActor = 366;
let hit = false;
let actorPoints = 0;

function showActor() {
    image(actorImage, xActor, yActor, 30, 30);
}

function moveActor() {
    if (keyIsDown(UP_ARROW)) {
        yActor -= 3;
    }
    if (keyIsDown(DOWN_ARROW) && yActor < 380) {
        yActor += 3;
    }
}
function collideValidator() {
    for (let i = 0; i < carImages.length; i++) {
        hit = collideRectCircle(xCars[i], yCars[i], carLength, carHight, xActor, yActor, 15);
        if (hit) {
            resetActor();
            collisionSound.play();
            if (noZeroPoints()) {
                actorPoints -= 1;
            }
        }
    }
}
function resetActor() {
    yActor = 366;
}

function showScore() {
    textAlign(CENTER);
    textSize(25);
    fill(color(255, 240, 60));
    text(actorPoints, width / 5, 26);
}

function scorepoints() {
    if (yActor < 15) {
        actorPoints += 1;
        scoreSound.play();
        resetActor();
    }
}

function noZeroPoints() {
    return actorPoints > 0;
}