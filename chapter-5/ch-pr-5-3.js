const myWork = [];

for (let i = 1; i <= 10; i++ ) {
	let stat = i % 2 ? true : false;
	let strArr = { 
		name: `Lesson ${i}`, status: stat
	};
	myWork.push(strArr);
}	
console.log(myWork);

