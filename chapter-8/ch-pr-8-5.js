let val = "I love JavaScript";
val = val.toLowerCase();

const arr = ["a", "e", "i", "o", "u"];

/* the first option
for(el in arr) {
	val = val.replaceAll(arr[el], el);
}
console.log(val)
*/

// the second option
arr.forEach((letter, index) => {
	console.log(letter)
	val = val.replaceAll(letter, index)
});
console.log(val)
