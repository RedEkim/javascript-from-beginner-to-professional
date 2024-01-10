let myCar = { 	make: "Ford",
		model: "Mustang",
		color: "red",
		year: 1972,
		new_car: false
}; // step 1

let variable = "color"; // step 2

myCar[variable] = "black"; // step 2

console.log(myCar); // step 2

variable = "forSale"; // step 3
myCar[variable] = true; // step 3

console.log(myCar.make); // step 4
console.log(myCar.model); // step 4

console.log(myCar["forSale"]); // step 5
