let name = window.prompt("Enter your name in this input");
name = String(name);

switch(name) {
	case "Sergay":
		console.log(`Salam ${name}`);
		break;
	case "Andrei":
		console.log(`Salam ${name}`);
		break;
	default:
		console.log("I don't know you!")
}
