let currentDateTime = new Date();
console.log(currentDateTime);

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
console.log(months.length);

let currentDay = currentDateTime.getDate();
let currentYear = currentDateTime.getFullYear();
let currentMonth = currentDateTime.getMonth();
let myDate = `${months[currentMonth]} ${currentDay} ${currentYear}`;
console.log(myDate);
