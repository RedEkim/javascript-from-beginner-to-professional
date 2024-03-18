let boxes = document.querySelectorAll(".box");
let main = document.querySelector(".container");    

main.addEventListener("click", (e) => {
    console.log("4");
}, false);
main.addEventListener("click", (e) => {
    console.log("1");
}, true);

boxes.forEach(ele => {
    ele.addEventListener("click", (e) => {
        console.log("3");
        console.log(e.target.textContent);
    }, false);
    ele.addEventListener("click", (e) => {
        console.log("2");
        console.log(e.target.textContent);
    }, true);
})