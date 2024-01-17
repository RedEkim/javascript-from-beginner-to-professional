const firstFunc = () => console.log("one");

const secondFunc = () => console.log("two");

const thirdFunc = () => {
	console.log("three");
	firstFunc();
	secondFunc();
};

const fourthFunc = () => {
	console.log("four");
	setTimeout(firstFunc, 0);
	thirdFunc();
};
fourthFunc();
