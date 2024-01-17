let arr = [];

function myFunc(a, b){
	return a + b;
}

for (i = 0; i < 10; i++) {
	let firstNum = i * 5;
	let secondNum = i * i;
	let amountNum = myFunc(firstNum, secondNum);
	arr.push(amountNum);
}

console.log(arr);
