//imagens do jogo
let roadImage;
let actorImage;
let carImage1;
let carImage2;
let carImage3;
let carImages;

//sons do jogo
let backgroundMusic;
let collisionSound;
let scoreSound;

function preload() {
    roadImage = loadImage("images/estrada.png");
    actorImage = loadImage("images/ator-1.png");
    carImage1 = loadImage("images/carro-1.png");
    carImage2 = loadImage("images/carro-2.png");
    carImage3 = loadImage("images/carro-3.png");
    carImages = [carImage1, carImage2, carImage3, carImage1, carImage2, carImage3];

    backgroundMusic = loadSound("sounds/trilha.mp3");
    collisionSound = loadSound("sounds/colidiu.mp3");
    scoreSound = loadSound("sounds/pontos.wav");
}