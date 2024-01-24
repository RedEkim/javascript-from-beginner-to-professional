class Animal {
	constructor(species, sounds) {
		this.species = species;
		this.sounds = sounds;
	}
	speak() {
		console.log(this.species + " " + this.sounds);
	}
}

Animal.prototype.eat = function() {
	return this.species + " is eating";
}

let cow = new Animal("cow", "muuu");
let lion = new Animal("lion", 'rrrrr');
cow.speak();
console.log(lion.eat());
console.log(lion);
