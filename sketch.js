let planet;

function setup() {
    createCanvas(400, 400);

    planet = new CelestialBody(width / 2, height / 2, 500, 20, 0, 0, 0);
}

function draw() {
    background(20);
    
    planet.update();
    planet.show();
}