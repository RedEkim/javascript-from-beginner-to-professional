const divs = document.querySelectorAll("div");

divs.forEach((el) => {
    function changeColor() {
        console.log(this.style.backgroundColor = this.textContent);
    };
    el.addEventListener("click", changeColor);
});

