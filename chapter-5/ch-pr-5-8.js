let str = "";
let skip = 4;

for (let i = 0; i < 10; i++) {
	
	if (i === skip) {	
		let counter = i;
		console.log(`Skip ${counter}`);
		continue;
	}
	str += i;
	
}
console.log(str);
