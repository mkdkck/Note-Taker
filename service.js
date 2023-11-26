const express = require('express');
const path = require('path');
const port = process.env.PORT ||3001; 
const fs = require('fs');
const api = require('./routes/index.js')


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use('/api', api);



app.get ('/', (req,res)=> {
  res.sendFile(path.join(__dirname,'/public/index.html'))
})



app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);