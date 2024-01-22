class Person {
	constructor(firstname, lastname) {
		this.firstname = firstname;
		this.lastname = lastname;
	}
}
let person1 = new Person("Ivan", "Ivanov");
let person2 = new Person("Petr", "Petrov");

console.log("Hello,", person1.firstname, person1.lastname, "&", person2.firstname, person2.lastname);
