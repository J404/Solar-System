class CelestialBody {
    constructor(x, y, mass, size, xVel, yVel, color, isStationary) {
        this.pos = createVector(x, y);
        this.mass = mass;
        this.size = size;
        this.vel = createVector(xVel, yVel);
        this.color = color;
        this.netForce = createVector(0, 0);
        this.acc = createVector(0, 0);
        this.stationary = isStationary;
    }

    update() {
        if (!this.stationary) {
            const forces = [];

            for (let body of celestialBodies) {
                if (this != body) {
                    forces.push(calculateGravity(this, body));
                }
            }

            //forces.push(this.vel);

            this.acc = calcNetForce(forces);
            this.vel.add(this.acc);
            //this.vel.limit(50);

            this.pos.add(this.vel);
        }
    }

    show() {
        noStroke();
        fill("#00FF00");

        ellipse(this.pos.x, this.pos.y, this.size);
    }
}