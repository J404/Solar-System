const G = 6.674 * Math.pow(10, -11);
//const G = 6.674 * Math.pow(10, 2200000000);

/**
 * Calculates the force of attraction due to gravity between two bodies
 * @param {CelestialBody} bodyA The first CelestialBody
 * @param {CelestialBody} bodyB The second CelestialBody
 * @return A p5.Vector containing the magnitude of the gravitational force experienced by both bodies, 
 * and the direction of force experienced by bodyA
 */
const calculateGravity = (bodyA, bodyB) => {
    const dist = p5.Vector.dist(bodyA.pos, bodyB.pos);
    
    // mass scaled to 1 kg
    const forceMag = (G * bodyA.mass * bodyB.mass) / Math.pow(dist * Math.pow(10, 6), 2);

    const diffVec = p5.Vector.sub(bodyB.pos, bodyA.pos);

    const force = p5.Vector.fromAngle(diffVec.heading());
    force.setMag(forceMag);

    return force;
}

/**
 * Calculates the gravitational force between two bodies based on their theoretical positions
 * @param {CelestialBody} bodyA 
 * @param {CelestialBody} bodyB 
 * @return A p5.Vector containing the magnitude of the gravitational force experienced by both bodies, 
 * and the direction of force experienced by bodyA
 */
const calculateGravityTheoretical = (bodyA, bodyB) => {
    newBodyA = new CelestialBody(bodyA.theoreticalPos.x, bodyA.theoreticalPos.y,
        bodyA.mass, bodyA.size, bodyA.theoreticalVel.x, bodyA.theoreticalVel.y, bodyA.color, bodyA.stationary);
    newBodyB = new CelestialBody(bodyB.theoreticalPos.x, bodyB.theoreticalPos.y,
        bodyB.mass, bodyB.size, bodyB.theoreticalVel.x, bodyB.theoreticalVel.y, bodyB.color, bodyB.stationary);

    return calculateGravity(newBodyA, newBodyB);
}