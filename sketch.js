const celestialBodies = [];
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

    celestialBodies.push(new CelestialBody((width / 2) - 170, (height / 2) - 50, (5.972 * Math.pow(10, 20)), 5, 0, 9.75, 0, false)); // planet
    celestialBodies.push(new CelestialBody((width / 2) - 170.003, (height / 2) - 50, (7.3 * Math.pow(10, 16)), 2, 0, 9.7, 0, false)); // moon
    celestialBodies.push(new CelestialBody((width / 2), (height / 2)- 50, (1.989 * Math.pow(10, 26)), 20, 0, 0, 0, false)); // sun
    celestialBodies.push(new CelestialBody((width / 2) - 175, height / 2, 52700000000, 20, 0, 0, 0));

    for (let i = 0; i < celestialBodies.length; i++) {
        const slider = createSlider(0, 75, celestialBodies[i].vel.y, 0.25);
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