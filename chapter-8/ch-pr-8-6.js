let PI = Math.PI;
console.log(PI);

let number = 5.7;
console.log("Ceil number:", Math.ceil(number));
console.log("Floor number:", Math.floor(number));
console.log("Round number:", Math.round(number));
console.log("Random number:", Math.random());
console.log("Random number 0 to 10:", Math.floor(Math.random() * 11));
console.log("Random number 0 to 100:", Math.floor(Math.random() * 101));

function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let x = 0; x < 100; x++) {
	console.log(randomNumber(1, 25));
}
