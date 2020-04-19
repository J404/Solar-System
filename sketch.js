let planet;
let planet2;

function setup() {
    createCanvas(400, 400);

    planet = new CelestialBody(width / 2, height / 2, 52700000000, 20, 0, 0, 0);

    planet2 = new CelestialBody((width / 2) + 100, height / 2, 52700000000, 20, 0, 0, 0);
}

function draw() {
    background(20);
    
    planet.update();
    planet2.update();

    planet.show();
    planet2.show();

    let gravity = calculateGravity(planet, planet2);
    
    stroke("#FF0000");
    line(planet.pos.x, planet.pos.y, planet.pos.x + gravity.x, planet.pos.y + gravity.y)
}