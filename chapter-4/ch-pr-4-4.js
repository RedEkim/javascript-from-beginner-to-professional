const randomNumber = Math.floor(Math.random() * 6);
let answer = "Something went wrong";
let question = prompt("Ask me anything");

switch(randomNumber) {
	case 0:
		answer = "first";
		break;
	case 1:
		answer = "second";
		break;
	default:
		answer = "I don't know about that"
}

let output = "You asked me " + question + ". I think that " + answer;
console.log(output);
