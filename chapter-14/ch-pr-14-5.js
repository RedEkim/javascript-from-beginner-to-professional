const canvas = document.getElementById("cvs1");
const ctx = canvas.getContext("2d");
const imgLoader = document.getElementById("imgLoader");

imgLoader.addEventListener("change", upImage, false);

function upImage() {
    let fr = new FileReader();
    fr.readAsDataURL(event.target.files[0]);
    fr.onload = function (e) {
        let img = new Image();
        img.src = event.target.result;
        img.onload = function () {
            canvas.width = img.width / 2;
            canvas.height = img.height / 2;
            ctx.drawImage(img, 0, 0, img.width / 2, img.height / 2);
        };
    }   
}