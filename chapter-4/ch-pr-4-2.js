let age = window.prompt("Укажите свой возраст");
age = Number(age);
let message;

if(age >= 21){
	console.log("Разрешить вход в заведение и покупку алкоголя");
} else if(age >= 19) {
	console.log("Разрешить вход в заведение и запретить покупку алкоголя");
} else { 
	console.log("Запретить вход");
}
console.log(age);
