const express = require('express');
const path = require('path');
const port = process.env.PORT ||3001; 
const api = require('./routes/index.js')

//initialize expressJS
const app = express();

//using middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use('/api', api);


// route setting for root, /note and anyother situation.
app.get ('/', (req,res)=> {
  res.sendFile(path.join(__dirname,'/public/index.html'))
})

app.get ('/note', (req,res)=> {
  res.sendFile(path.join(__dirname,'/public/note.html'))
})

app.get ('*', (req,res)=> {
  res.sendFile(path.join(__dirname,'/public/index.html'))
})


app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);