let userNumber = window.prompt("You need a random number from 0 to 100");
userNumber = Number(userNumber);
let randomNumber = Math.ceil(Math.random()*100);

if (userNumber > randomNumber){
	console.log(`Число пользователя ${userNumber}, оно больше ${randomNumber}`);
} else if(userNumber == randomNumber) {
	console.log(`Число пользователя ${userNumber}, оно равно ${randomNumber}`);
} else if(userNumber < randomNumber) {
	console.log(`Число пользователя ${userNumber}, оно меньше ${randomNumber}`);
}
