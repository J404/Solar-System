const celestialBodies = [];

function setup() {
    createCanvas(1000, 700);

    celestialBodies.push(new CelestialBody((width / 2) - 100, (height / 2) - 50, (5.972 * Math.pow(10, 24)), 20, 0, 80, false));
    celestialBodies.push(new CelestialBody((width / 2) + 100, (height / 2)- 50, (1.989 * Math.pow(10, 28)), 20, 0, 0, 0, false));
    //celestialBodies.push(new CelestialBody((width / 2) - 175, height / 2, 52700000000, 20, 0, 0, 0));
}

function draw() {
    background(20);
    frameRate(20);

    for (let body of celestialBodies) {
        body.update();
        body.show();
    }

    stroke("#FF0000");
    //line(celestialBodies[0].pos.x, celestialBodies[0].pos.y, 
    //    celestialBodies[0].pos.x + netForce.x, celestialBodies[0].pos.y + netForce.y);
}