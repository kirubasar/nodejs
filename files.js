
const fs = require('fs');


fs.readFile('hello.txt', 'utf-8', (err, data)=>{
    if(err){
        console.log('Error reading file', err);
    } else {
        console.log(data);
    }
})