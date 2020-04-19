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

        this.theoreticalPos = createVector(x, y);
        this.theoreticalVel = createVector(xVel, yVel);
        this.path = [ {x, y} ];
        this.simulating = false;
    }

    simulatePath() {
        this.simulating = true;
        const forces = [];

        for (let body of celestialBodies) {
            if (this != body) {
                forces.push(calculateGravityTheoretical(this, body));
            }
        }

        //forces.push(this.vel);
        this.netForce = calcNetForce(forces);

        this.acc = this.netForce;
        this.acc.setMag(this.acc.mag() / this.mass);

        this.theoreticalVel.add(this.acc);
        //this.vel.limit(50);

        this.theoreticalPos.add(this.theoreticalVel);
        
        this.path.push({
            x: this.theoreticalPos.x,
            y: this.theoreticalPos.y
        });

        this.drawSimulatedPath();
    }

    resetSimulatedPath() {
        this.path = [{
            x: this.pos.x,
            y: this.pos.y
        }];

        this.theoreticalPos = createVector(this.pos.x, this.pos.y);
        this.theoreticalVel = createVector(this.vel.x, this.vel.y);
    }

    update() {
        
        // If we were previously simulating, we reset the acc/netForce from the simulation
        if (this.simulating) {
            this.simulating = false;
            this.acc = createVector(0, 0);
            this.netForce = createVector(0, 0);
        }

        if (!this.stationary) {
            const forces = [];

            for (let body of celestialBodies) {
                if (this != body) {
                    forces.push(calculateGravity(this, body));
                }
            }

            //forces.push(this.vel);
            this.netForce = calcNetForce(forces);

            this.acc = this.netForce;
            this.acc.setMag(this.acc.mag() / this.mass);

            this.vel.add(this.acc);
            //this.vel.limit(50);

            this.pos.add(this.vel);
        }
    }

    drawSimulatedPath() {
        noFill();
        stroke("#0000FF");

        beginShape();

        for (let point of this.path) {
            vertex(point.x, point.y);
        }

        endShape();
    }

    show() {
        noStroke();
        fill("#00FF00");

        ellipse(this.pos.x, this.pos.y, this.size);
    }
}