let description = ["super", "hungry", "angry", "wonderful", "careful"];

function askName() {
	const question = prompt("Enter your name");
	const nameDescription = Math.floor(Math.random() * description.length);
	console.log(description[nameDescription] + " " + question);
}

askName();
