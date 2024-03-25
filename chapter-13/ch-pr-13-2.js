const myPromisse = new Promise((resolve, reject) => {
    resolve("Start Counting!");
})

function counter(val) {
    console.log(val);
}

myPromisse
    .then(value => {
        counter(value);
        return "One";
    })
    .then(value => {
        counter(value);
        return "Two";
    })
    .then(value => {
        counter(value);
        return "Three";
    })
    .then(value => {
        counter(value);
    })