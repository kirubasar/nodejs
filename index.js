// server.mjs
const express =  require('express');
const fs = require('fs')
const app = express();
app.get('/', (req, res)=>{
    console.log(req);
    res.send('hello world')
})
// starts a simple http server locally on port 3000
app.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});

// run with `node server.mjs`
