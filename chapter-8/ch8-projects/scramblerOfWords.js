let str = "sword";

function scramble(x) {
	let max = x.length;
	let temp = "";
	for(let i = 0; i < max; i++) {
		console.log(x.length);
		let index = Math.floor(Math.random() * x.length);
		temp += x[index];
		console.log(temp);
		x = x.substr(0, index) + x.substr(index + 1);
		console.log(x);
	}
	return temp;
}

console.log(scramble(str));
