function calculateCubeVolume() {
    const side = document.getElementById('cube-side').value;
    if (side > 0) {
        const volume = Math.pow(side, 3);
        console.log(`Volume of the cube: ${volume}`);
    } else {
        console.log('Please enter a valid side length.');
    }
}

function calculateSphereVolume() {
    const radius = document.getElementById('sphere-radius').value;
    if (radius > 0) {
        const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
        console.log(`Volume of the sphere: ${volume}`);
    } else {
        console.log('Please enter a valid radius.');
    }
}

function calculateCylinderVolume() {
    const radius = document.getElementById('cylinder-radius').value;
    const height = document.getElementById('cylinder-height').value;
    if (radius > 0 && height > 0) {
        const volume = Math.PI * Math.pow(radius, 2) * height;
        console.log(`Volume of the cylinder: ${volume}`);
    } else {
        console.log('Please enter valid radius and height.');
    }
}