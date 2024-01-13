const myTable = [];
const rows = 4;
const cols = 7;
let counter = 0;

for (let i = 0; i < rows; i++) {
	let tempTable = [];
	for (let j = 0; j < cols; j++) {
		counter++
		tempTable.push(counter);
	}
	myTable.push(tempTable);
}
console.table(myTable);
