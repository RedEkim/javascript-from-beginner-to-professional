let num = "1000";

(function () {
	let num = "2000"; //local variable visible
	console.log(num);
})();

let result = (function () {
	let num = "Mike";
	return num;
})();

console.log(result);
console.log(num);

(function (val) {
	console.log(`My name is ${val}`);
})("Mike");
