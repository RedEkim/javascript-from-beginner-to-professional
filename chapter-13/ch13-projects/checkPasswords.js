const allowed = ["1234", "password", "qwerty123"];

function passwordChecker(pass) {
    return allowed.includes(pass);
}

function login(password) {
    return new Promise((resolve, reject) => {
        if (passwordChecker(password)) {
            resolve({
                status: true
            });
        } else {
            reject({
                status: false
            });
        }
    });
}

function checker(pass) {
    login(pass)
    .then(token => {
        console.log("Approve:");
        console.log(token);
    })
    .catch(value => {
        console.log("Reject:");
        console.log(value);
    })
}

checker("qwerty123");
checker("test");