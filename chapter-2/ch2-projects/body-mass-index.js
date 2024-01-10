let height_inches = 74.0157;
let weight_lbs = 204.1481;

const inch_to_cm = 2.54;
const lb_to_kg = 2.2046;

let height_cms = height_inches * inch_to_cm;
let weight_kgs = weight_lbs / lb_to_kg;

console.log(`My height is ${Math.ceil(height_cms)} cms(${Math.floor(height_inches)} inches).`);
console.log(`My weight is ${weight_kgs.toFixed(2)} kgs(${weight_lbs.toFixed(2)} lbs)`);
console.log(`My BMI is ${(weight_kgs / (height_cms / 100)**2).toFixed(2)}`)
