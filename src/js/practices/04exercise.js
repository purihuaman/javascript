const heightInCentimeters = 160;
const heightInMeters = 1.6;
const weightKg = 58.5;

const roundedHeight = Math.ceil(heightInMeters);
const roundedWeight = Math.floor(weightKg);

const TheyAreEqual = Number.MAX_VALUE + 1 === Number.MAX_VALUE;

console.log({ roundedHeight, roundedWeight, TheyAreEqual });
