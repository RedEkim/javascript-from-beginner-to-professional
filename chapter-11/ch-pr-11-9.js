const dragme = document.querySelector("#dragme");
dragme.addEventListener("dragstart", (e) => {
    dragme.computedStyleMap.opacity = .5;
});
dragme.addEventListener("dragend", (e) => {
    dragme.computedStyleMap.opacity = "";
});

const boxes = document.querySelectorAll(".box");
boxes.forEach(box => {
    box.addEventListener("dragenter", (e) => {
        e.target.classList.add("red");
    });
    box.addEventListener("dragover", (e) => {
        e.preventDefault();
    });
    box.addEventListener("dragleave", (e) => {
        e.target.classList.remove("red");
    });
    box.addEventListener("drop", (e) => {
        e.preventDefault();
        console.log("dropped");
        e.target.appendChild(dragme);
    });
});
function dragStart(e) {
    console.log("Started");
}