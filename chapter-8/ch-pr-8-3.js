//array for experiment
let arr = [10, 20, 30, 40, 50, 60];

//the first option(anonymous function)
let mapped_arr1 = arr.map( function(elem) {
	return elem * 2;
});
console.log(mapped_arr1);

//the alternative option(arrow function)
let mapped_arr2 = arr.map(x => x * 2);
console.log(mapped_arr2);
