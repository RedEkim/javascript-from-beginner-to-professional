function checkNumber(val) {
    try {
        if (isNaN(val)) {
            throw "Not a number!";
        } else {
            console.log("Got a number");
        } 
        } catch (e) {
            console.error(e);
        } finally {
            console.log("Done " + val);
        }
    
}

checkNumber("word");
checkNumber(100);