const output = document.querySelector(".output1");
const in1 = document.querySelector("input[name='first']");
const in2 = document.querySelector("input[name='last']");

in1.addEventListener("change", (e) => {
    console.log("change");
    updater(in1.value);
});
in1.addEventListener("blur", (e) => {
    console.log("blur");
});
in1.addEventListener("focus", (e) => {
    console.log("focus");
});
in2.addEventListener("change", (e) => {
    console.log("change");
    updater(in2.value);
});
in2.addEventListener("blur", (e) => {
    console.log("blur");
});
in2.addEventListener("focus", (e) => {
    console.log("focus");
});

function updater (str) {
    output.textContent = str;
};