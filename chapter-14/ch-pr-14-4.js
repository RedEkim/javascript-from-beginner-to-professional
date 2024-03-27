const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const txt = "Hello world!";
ctx.font = "Italic 50px Comic";
ctx.fillStyle = "blue";
// ctx.textAlign = "left";
ctx.fillText(txt, 20, 80);
ctx.font = "bold 20px Calibri";
ctx.fillStyle = "red";

for(let i = 1; i < 11; i++) {
    ctx.fillText("counter: " + i, 50, (100 + (40 * i)));
}