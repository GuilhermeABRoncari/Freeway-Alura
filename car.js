//lista de variaveis dos carros
let xCars = [600, 600, 600, 600, 600, 600];
let yCars = [40, 96, 150, 210, 270, 318];
let carsSpeed = [2, 2.5, 3.2, 5, 3.3, 2.3];
let carLength = 50;
let carHight = 40;

function showCar() {
    for (let i = 0; i < carImages.length; i++) {
        image(carImages[i], xCars[i], yCars[i], carLength, carHight);
    }
}
function moveCar1() {
    for (let i = 0; i < carImages.length; i++) {
        xCars[i] -= carsSpeed[i];
    }
}
function resetCarPosition() {
    for (let i = 0; i < carImages.length; i++) {
        if (hasPass(xCars[i])) {
            xCars[i] = 600;
        }
    }
}
function hasPass(xCar) {
    return xCar < -50;
}