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
    const forceMag = (G * bodyA.mass * bodyB.mass) / Math.pow(dist * 1000000, 2);

    const diffVec = p5.Vector.sub(bodyB.pos, bodyA.pos);

    const force = p5.Vector.fromAngle(diffVec.heading());
    force.setMag(forceMag);

    return force;
}