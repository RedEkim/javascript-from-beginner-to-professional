const max = 10;
const ranNumber = Math.floor(Math.random() * max) + 1;
let correct = false;

console.log(ranNumber);

while (!correct) {
	let qst = prompt("Gues a Number 1 - " + max);
	qst = Number(qst);
	if (qst === ranNumber) {
		correct = true;
		console.log("You win " + ranNumber);
		
	} else if (qst > ranNumber) {
		console.log("Too high")
	} else {
		console.log("Too low");
	}
}
