const inpt = document.querySelector("input");
const output = document.querySelector(".output");
const btn = document.querySelector("button");

const emailPattern = /([a-zA-z0-9._-]+@[a-zA-z0-9._-]+\.[a-zA-z0-9._-]+)\w+/;

btn.addEventListener("click", testCor);

function testCor() {
    const val = inpt.value; 
    const result = emailPattern.test(val);
    let response = "";

    if(result) {
        output.style.color = "green";
        response = "Valid Email";
    } else {
        output.style.color = "red"
        response = "Invalid Email";
    }
    emailPattern.value = "";
    output.textContent = response;
}
