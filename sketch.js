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
}

// Function to start or stop simulation
const setSim = status => running = status;

// p5js setup
function setup() {
  createCanvas(mapWidth, mapHeight);

  celestialBodies.push(
    new CelestialBody(
      width / 2,
      height / 2 - 50,
      1.989 * Math.pow(10, 26),
      25,
      0,
      0,
      '#00FF00',
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
      '#00FF00',
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
      '#00FF00',
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

function keyPressed() {
  if (key == ' ') {
    for (let body of celestialBodies) {
      body.update();
      body.show();
    }
  }
}
