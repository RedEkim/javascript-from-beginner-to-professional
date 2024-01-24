class Menu {
	#price1 = 10;
	#price2 = 20;
	constructor(val1, val2) {
		this.val1 = val1;
		this.val2 = val2;
	}
	
	calTotal(){
		return (this.val1 * this.#price1) + (this.val2 * this.#price2);
	}
	get total() {
		return this.calTotal();
	}
}

const val1 = new Menu(2,0);
const val2 = new Menu(6,9);
const val3 = new Menu(5,3);
console.log(val1.total);
console.log(val2.total);
console.log(val3.total);
