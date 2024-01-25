const w = "How's%20it%20going%3F";
const decode_w = decodeURIComponent(w);
console.log(decode_w); 
const encoded_w = encodeURIComponent(decode_w);
console.log(encoded_w);

const web_URI = "http://www.basescripts.com?=Hello World";
const encoded_web_URI = encodeURI(web_URI);
console.log(encoded_web_URI);
