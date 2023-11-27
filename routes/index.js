const express = require ('express');
const notesRouter = require('./notes.js');
const app = express();

//set middleware for notes route.
app.use('/notes', notesRouter);


module.exports = app;