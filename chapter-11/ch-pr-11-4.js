const box = document.querySelector(".box");

box.textContent = "hello world";
// set styles
box.style.height = "100px";
box.style.width = "100px";
box.style.backgroundColor = "black";
box.style.color = "white";

window.onload = () => {
    box.addEventListener("mousedown", function() {changeColor(this, "green");});
    box.addEventListener("mouseenter", function() {changeColor(this, "red");});
    box.addEventListener("mouseout", function() {changeColor(this, "yellow");});
    box.addEventListener("dblckick", function() {changeColor(this, "green");});
    box.addEventListener("mouseup", function() {changeColor(this, "blue");});
}

function changeColor(el, color) {
    box.style.backgroundColor = color;
    console.log(el.style.backgroundColor = color);
}