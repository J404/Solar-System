const mapWidth = 1050;
const mapHeight = 900;

const celestialBodies = [];
let startButton, stopButton;

let sliders = [];

let running = false;

// Receives data update from index.js component
// Data is object with shape of celestialBody class
const updateBody = (celestialBody, i) => {
  const body = celestialBodies[i];

  body.pos.x = celestialBody.x;
  body.pos.y = celestialBody.y;
  body.mass = celestialBody.mass;
  body.size = celestialBody.size;
  body.vel.x = celestialBody.xVel;
  body.vel.y = celestialBody.yVel;
  body.color = celestialBody.color;
  body.stationary = celestialBody.stationary;

  if (!running) {
    for (let body of celestialBodies) {
      body.resetSimulatedPath();
    }
  }
};

// Delets a celestialBody from the array
const deleteBody = i => {
  celestialBodies.splice(i, 1);
}

// Function to start or stop simulation
const setSim = (status) => {
  running = status;

  if (!status) {
    for (let body of celestialBodies) {
      body.resetSimulatedPath();
    }
  }
};

// p5js setup
function setup() {
  const canvas = createCanvas(mapWidth, mapHeight);
  canvas.parent('canvas-container');

  celestialBodies.push(
    new CelestialBody(
      width / 2,
      height / 2 - 50,
      1.989 * Math.pow(10, 26),
      25,
      0,
      0,
      '#FFF700',
      false
    )
  ); // sun
  celestialBodies.push(
    new CelestialBody(
      200,
      height / 2 - 50,
      3 * Math.pow(10, 22),
      20,
      0,
      5,
      '#F08C00',
      false
    )
  );
  celestialBodies.push(
    new CelestialBody(
      339,
      height / 2 - 50,
      3 * Math.pow(10, 22),
      10,
      0,
      7,
      '#00FFB7',
      false
    )
  );
}

function draw() {
  background(20);
  //frameRate(30);
  //noLoop();

  if (running) {
    for (let body of celestialBodies) {
      body.update();
    }
  } else {
    for (let body of celestialBodies) {
      body.simulatePath();
    }
  }

  for (let body of celestialBodies) {
    body.show();
  }
}
