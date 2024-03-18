const output = document.querySelector(".output");
const eles = document.querySelectorAll("input");

eles.forEach(el => {
    el.addEventListener("keydown", (e) => {
        if (!isNaN(e.key)) {
            output.textContent += e.key;
        }
    });
    el.addEventListener("keyup", (e) => {
        console.log(e.key);
    });
    el.addEventListener("paste", (e) => {
        console.log('pasted');
    });
});