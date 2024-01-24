class ControlEmployee {
	constructor(firstname, lastname, experience) {
		this.firstname = firstname;
		this.lastname = lastname;
		this.experience = experience;
	}
}

let person1 = new ControlEmployee("Ivan", "Ivanov", 10);
let person2 = new ControlEmployee("Petr", "Petrov", 15);
let workers = [person1, person2];

ControlEmployee.prototype.info = function() {
	return "Name: " + this.firstname + ", Lastname: " + this.lastname + ", Experience: " + this.experience;
}

workers.forEach((person) => {
	console.log(person.info());
});
