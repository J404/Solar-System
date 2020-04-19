class CelestialBody {
    constructor(x, y, mass, size, xVel, yVel, color) {
        this.pos = createVector(x, y);
        this.mass = mass;
        this.size = size;
        this.vel = createVector(xVel, yVel);
        this.color = color;
        this.netForce = createVector(0, 0);
        this.acc = createVector(0, 0);
    }

    update() {
        const gravities = [];

        this.vel.add(this.acc);
        this.pos.add(this.vel);
    }

    show() {
        noStroke();
        fill("#00FF00");

        ellipse(this.pos.x, this.pos.y, this.size);
    }
}