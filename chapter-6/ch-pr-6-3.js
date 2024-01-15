const a = Number(prompt("Enter number"));
const b = Number(prompt("Enter number"));
let oper = prompt("plus or minus");

function calculator(a, b, oper) {
	if(oper === "plus") {
		console.log(a + b);
	} else {
		console.log(a - b);
	}
}

calculator(a, b, oper);
