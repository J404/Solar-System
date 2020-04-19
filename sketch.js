const celestialBodies = [];

function setup() {
    createCanvas(600, 600);

    celestialBodies.push(new CelestialBody(width / 2, height / 2, 52700000000, 20, 0, 0, 0));
    celestialBodies.push(new CelestialBody((width / 2) + 100, (height / 2) - 50, 52700000000, 20, 0, 0, 0));
    celestialBodies.push(new CelestialBody((width / 2) - 175, height / 2, 52700000000, 20, 0, 0, 0));
}

function draw() {
    background(20);

    for (let body of celestialBodies) {
        body.update();
        body.show();
    }

    stroke("#FF0000");
    line(planet[0].pos.x, planet[0].pos.y, planet[0].pos.x + netForce.x, planet[0].pos.y + netForce.y);
}