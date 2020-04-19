let planet, planet2, planet3;

function setup() {
    createCanvas(600, 600);

    planet = new CelestialBody(width / 2, height / 2, 52700000000, 20, 0, 0, 0);

    planet2 = new CelestialBody((width / 2) + 100, (height / 2) - 50, 52700000000, 20, 0, 0, 0);
    planet3 = new CelestialBody((width / 2) - 175, height / 2, 52700000000, 20, 0, 0, 0);
}

function draw() {
    background(20);
    
    planet.update();
    planet2.update();

    planet.show();
    planet2.show();

    planet3.update();
    planet3.show();

    let gravity1 = calculateGravity(planet, planet2);
    let gravity2 = calculateGravity(planet, planet3);

    let netForce = calcNetForce([gravity1, gravity2]);
    
    stroke("#FF0000");
    line(planet.pos.x, planet.pos.y, planet.pos.x + netForce.x, planet.pos.y + netForce.y);
}