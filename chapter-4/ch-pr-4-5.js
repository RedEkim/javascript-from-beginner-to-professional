let prize = window.prompt("You need input a number from 0 to 10");
prize = Number(prize);
let output = "My Selection: "

switch(prize){
	case 0:
	case 1:
	case 2:
	case 3:
	case 4:
		output += "Gold ";
	case 5:
		output += "Coin ";
		break;
	case 6:
		output += "Big ";
	case 7:
		output += "Box of ";
	case 8:
		output += "Silver ";
	case 9:
		output += "Bricks ";
		break;
	case 10:
		output += "Sorry Try Again";
		break;
	default:
		output += "You need input a number from 0 to 10";
}

console.log(output);
