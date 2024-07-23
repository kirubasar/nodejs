
const express =  require('express');
const fs = require('fs')
const app = express();
app.use(express.json())
function generateRandomFilename(language){
  return `${Math.random().toString(36).substring(7)}.${language}`
}
app.get('/', (req, res)=>{
   const code = req.body.code;
   const language=req.body.language;
   fs.writeFile('./codes/' + generateRandomFilename(language), code, (err)=>{
    if (!err){
      res.send('success')
    }else{
      res.send('error')
    }
   })
    
})
// starts a simple http server locally on port 3000
app.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});

// run with `node server.mjs`
