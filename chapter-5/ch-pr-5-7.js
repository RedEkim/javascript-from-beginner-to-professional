const car = {
	model: "21099",
	make: "LADA",
	year: 2001
};

for (let prop in car) {
	console.log(prop, car[prop]);
}

const arr = ["model", "make", "year"];

for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}

for (el in arr) {
	console.log(el, arr[el]);
}
