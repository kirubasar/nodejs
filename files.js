
const fs = require('fs');

const message = "Hello, Node.js";
fs.writeFile('hello.txt', message, (error)=>{
    if(error){
        console.error('Error writing to file');
    } else {
        console.log('File written successfully');
    }
})