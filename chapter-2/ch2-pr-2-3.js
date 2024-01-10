let a = window.prompt("Необходимо ввести значение для стороны 'a'", 10);
let b = window.prompt("Необходимо ввести значение для стороны 'b'", 7);
a = Number(a);
b = Number(b);

let hypotenuseVal = (a**2 + b**2)**0.5;

console.log(hypotenuseVal);
