const myTable = [];
const value = 15;

for (i = 0; i < value; i++) {
	const temp = [];
	for (j = 0; j < value; j++) {
		temp.push(i*j);
	}
	myTable.push(temp);
}
console.table(myTable);
