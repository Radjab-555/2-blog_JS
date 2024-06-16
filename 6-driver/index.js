const hasLicence = true;
const age = true;
const isDrunck = false;

const driver = hasLicence && age && !isDrunck;
console.log(`Могу водить: ${driver ? 'yes' : 'no'}`);