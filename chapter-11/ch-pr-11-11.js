// function toTheRight() {
//     let b = document.getElementById("block");
//     let x = 0;

//     setInterval(function () {
//         if (x === 600) {
//             clearInterval();
//         } else {
//             x++;
//             b.style.bottom = x + "px";
//         }
//     }, 2);
// }
const main = document.querySelector("#block");
let mover = {
    speed: 10,
    dir: 1,
    pos: 0
};
main.addEventListener("click", moveBlock);

function moveBlock() {
    let x = 30;
    setInterval(function () {
        if (x < 1) {
            clearInterval();
        } else {
            if (mover.pos > 800 || mover.pos < 0) {
                mover.dir *= -1;
            }
            x--;
            mover.pos += x * mover.dir;
            main.style.left = mover.pos + "px";
            console.log(mover.pos);
        }
    }, 2);
}