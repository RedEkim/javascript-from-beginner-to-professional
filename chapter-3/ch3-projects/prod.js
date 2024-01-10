let arr_prods = [];

let obj1 = {	name: "one",
		model: 1,
		cost: 100,
		qty: 2
};
let obj2 = {    name: "two",
                model: 2,
                cost: 200,
                qty: 2
};
let obj3 = {    name: "three",
                model: 3,
                cost: 400,
                qty: 5
};

arr_prods.push(obj1, obj2, obj3);
console.log(arr_prods);

console.log(arr_prods[2].qty);
