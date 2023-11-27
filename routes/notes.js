const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const {
    readFromFile,
    readAndAppend,
    writeToFile,
  } = require('../helpers/fsUtils.js');

notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
  });

notes.post('/', (req,res) =>{
    const {title, text} = req.body;

    if (title && text) {
        const newNote = {
            title,
            text,
            note_id : uuidv4(),
        }
        readAndAppend(newNote,'./db/db.json');
        const response = {
            status: 'success',
            body: newNote,
        };
      
        res.json(response);
        
    } else {
        res.json('Error in saving notes');
    }
})

notes.delete('/:note_id', (req,res) =>{
    const noteId = req.params.note_id;
    readFromFile('./db/db.json')
    .then((data) => JSON.parse(data))
    .then((json) => {
        const deleteNote = json.filter((note) => note.note_id !== noteId);
        writeToFile('./db/db.json', deleteNote);
        res.json(`Item ${noteId} has been deleted 🗑️`);
    });
})


module.exports = notes;