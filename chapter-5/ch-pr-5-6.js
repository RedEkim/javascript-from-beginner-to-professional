const arr = [];
for (let i = 0; i < 10; i++) {
	arr.push(i + 1);
}
console.log(arr);

for (let j = 0; j < arr.length; j++) {
	console.log(arr[j]);
}

for (let n of arr) {
	console.log(n);
}
