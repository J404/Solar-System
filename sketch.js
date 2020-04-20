const celestialBodies = [];
let planet, moon, sun;

let startButton, stopButton;

let sliders = [];

let running = false;

function setup() {
    createCanvas(1000, 700);

    startButton = createButton("Start");
    startButton.position(10, 10);
    startButton.mousePressed(() => {
        running = true;
    });

    //sun = new CelestialBody(width / 2, height / 2, 2 * Math.pow(10, 26), 30, 0, 0, 0, false);
    planet = new CelestialBody((width / 2) - 170, height / 2, 1.5 * Math.pow(10, 24), 10, 0, 2, 0, false);
    moon = new CelestialBody((width / 2) - 185, height / 2, 1.123 * Math.pow(10, 20), 1, 0, 4.75, 0, false);

    //celestialBodies.push(sun);
    celestialBodies.push(planet);
    celestialBodies.push(moon);

    for (let i = 0; i < celestialBodies.length; i++) {
        const slider = createSlider(0, 50, celestialBodies[i].vel.y, 0.25);
        slider.position(10, (i * 30) + 30);
        slider.value(celestialBodies[i].vel.y);
        sliders.push(slider);
    }
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

    if (!running) {
        for (let i = 0; i < sliders.length; i++) {
            noStroke();
            fill("#FFFFFF");
            text(sliders[i].value(), sliders[i].position().x + 125, sliders[i].position().y + 10);

            if (celestialBodies[i].vel.y != sliders[i].value()) {
                celestialBodies[i].vel.y = sliders[i].value();

                for (let body of celestialBodies) {
                    body.resetSimulatedPath();
                }
            }
            celestialBodies[i].simulatePath();
        }
    }

    for (let body of celestialBodies) {
        body.show();
    }
}

function keyPressed() {
    if (key == " ") {
        for (let body of celestialBodies) {
            body.update();
            body.show();
        }
    }
}