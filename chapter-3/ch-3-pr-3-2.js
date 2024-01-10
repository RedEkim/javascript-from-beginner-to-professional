arr = ["Milk", "Bread", "Apples"]; // step 1-2
arr.splice(1, 1, "Bananas", "Eggs"); // step 3

arr.pop(); // step 4
console.log(arr); // step 4

arr.sort(); // step 5
console.log(arr.indexOf("Milk")); // step 6

arr.splice(arr.indexOf("Bananas")+1, 0, "Carrots", "Lettuce"); // step 7

arr2 = ["Juice", "Pop"]; // step 8

arr3 = arr.concat(arr2, arr2); // step 9
console.log(arr3); // step 9

console.log(arr3.lastIndexOf("Pop")); // step 10

console.log(arr3); // step 11
