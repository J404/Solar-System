const celestialBodies = [];
let startButton, stopButton;

let running = false;

function setup() {
    createCanvas(1000, 700);

    startButton = createButton("Start");
    startButton.position(10, 10);
    startButton.mousePressed(() => {
        running = true;
    });

    stopButton = createButton("Stop");
    stopButton.position(60, 10);
    stopButton.mousePressed(() => {
        running = false;
    });

    celestialBodies.push(new CelestialBody((width / 2) - 150, (height / 2) - 50, (5.972 * Math.pow(10, 23)), 20, 0, 25, false));
    celestialBodies.push(new CelestialBody((width / 2) - 165, (height / 2) - 50, (1.12 * Math.pow(10, 8)), 5, 0, 26.75, false));
    celestialBodies.push(new CelestialBody((width / 2) + 100, (height / 2)- 50, (1.989 * Math.pow(10, 27)), 20, 0, 0, 0, false));
    //celestialBodies.push(new CelestialBody((width / 2) - 175, height / 2, 52700000000, 20, 0, 0, 0));
}

function draw() {
    background(20);
    //frameRate(5);
    //noLoop();

    if (running) {
        for (let body of celestialBodies) {
            body.update();
        }
    }

    for (let body of celestialBodies) {
        body.show();
    }
    
    stroke("#FF0000");
    //line(celestialBodies[0].pos.x, celestialBodies[0].pos.y, 
    //    celestialBodies[0].pos.x + netForce.x, celestialBodies[0].pos.y + netForce.y);
}

function keyPressed() {
    if (key == " ") {
        for (let body of celestialBodies) {
            body.update();
            body.show();
        }
    }
}