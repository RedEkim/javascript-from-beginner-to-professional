window.onload = (e) => {
    message("Window ready", e);
}

document.addEventListener("DOMContentLoaded", (e) => {
    message("Document ready", e);
});

function message(val, event) {
    console.log(val, ", ", event);
}