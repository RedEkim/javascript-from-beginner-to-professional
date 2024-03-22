let myList = [
    {
        "name":"Lear JavaScript", 
        "status":true
    },
    {
        "name":"Try JSON", 
        "status":false
    }
];
let newStr = JSON.stringify(myList);
let newObj = JSON.parse(newStr);

newObj.forEach((el) => {
    console.log(`${el.name} = ${el.status}`)
});