/**
 * Takes all of the forces acting on a body and calculates the net force experienced by the body
 * @param {p5.Vector[]} forces Array of p5.Vectors representing the forces acting on a body
 * @return A p5.Vector representing the net force on the object
 */
const calcNetForce = (forces) => {
    let netForce = createVector(0, 0);

    for (let force of forces) {
        netForce.add(force);
    }

    return netForce;
}