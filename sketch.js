const celestialBodies = [];
let startButton, stopButton;

let sliders = [];

let running = false;

function setup() {
  createCanvas(1050, 900);

  startButton = createButton('Start');
  startButton.position(10, 10);
  startButton.mousePressed(() => {
    running = true;
  });

  celestialBodies.push(
    new CelestialBody(
      width / 2,
      height / 2 - 50,
      1.989 * Math.pow(10, 26),
      25,
      0,
      0,
      0,
      false
    )
  ); // sun
  celestialBodies.push(
    new CelestialBody(
      width / 2 - 100,
      height / 2 - 50,
      5.234 * Math.pow(10, 22),
      10,
      0,
      11.062,
      0,
      false
    )
  );
  celestialBodies.push(
    new CelestialBody(
      width / 2 - 230,
      height / 2 - 50,
      5.234 * Math.pow(10, 23),
      15,
      0,
      6.9,
      0,
      false
    )
  );

  for (let i = 0; i < celestialBodies.length; i++) {
    const slider = createSlider(0, 50, celestialBodies[i].vel.y, 0.001);
    slider.position(10, i * 30 + 30);
    slider.value(celestialBodies[i].vel.y);
    sliders.push(slider);
  }
}

function draw() {
  background(20);
  //frameRate(30);
  //noLoop();

  if (running) {
    for (let body of celestialBodies) {
      body.update();
    }
  }

  if (!running) {
    for (let i = 0; i < sliders.length; i++) {
      noStroke();
      fill('#FFFFFF');
      text(
        sliders[i].value(),
        sliders[i].position().x + 125,
        sliders[i].position().y + 10
      );

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
  if (key == ' ') {
    for (let body of celestialBodies) {
      body.update();
      body.show();
    }
  }
}
