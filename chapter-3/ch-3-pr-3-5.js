let people = { friends: [] };

let fr1 = { 	name: "Sergey",
		lastName: "Ivanov",
		id: 1 
};
let fr2 = { 	name: "Petr",
		lastName: "Petrov",
		id: 2
};
let fr3 = { 	name: "Ivan",
		lastName: "Ivanov",
		id: 3
};

people.friends.push(fr1, fr2, fr3);

console.log(people);
