const express = require('express');
const path = require('path');
const port = 3001; 
const fs = require('fs');


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));








app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);