const canvas = document.getElementById("c1");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "red";
ctx.fillRect(20, 40, 300, 100);
ctx.strokeRect(90, 90, 520, 320);
ctx.clearRect(150, 150, 400, 200);