const names = ["Mike", "Irina", "Olya", "Kolya"]

function greet(fullName) {
    console.log(`Welcome ${fullName[0]} ${fullName[1]}`);
}

function processCall(user, callback) {
    const fullName = user.split(" ");
    callback(fullName);
}

processCall("Mike Pike", greet);