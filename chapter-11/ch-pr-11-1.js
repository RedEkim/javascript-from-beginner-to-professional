let darkMode = false;

document.getElementById("darkLight").onclick = () => {
    if(!darkMode) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        darkMode = true;
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        darkMode = false;
    }
}