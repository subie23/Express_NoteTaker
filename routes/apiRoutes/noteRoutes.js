const router = require("express").Router();
const {noteCreateNewNote,noteDeleteNote} = require('../../lib/note');
let {notesArray} = require('../../Develop/db/db');


router.get('/db', (req, res) => {
    let results = notesArray;
    res.json(results);
});

router.post('/db', (req, res) => {
    if(notesArray){
    req.body.id = notesArray.length.toString();
    } else 
    {req.body.id = 0}
    res.json(noteCreateNewNote(req.body, notesArray));
});

router.delete('/notes:id', async function (req, res) {
        const { id } = req.params;
        notesArray = noteDeleteNote(notesArray, id);
        res.json(notesArray);
    });

 module.exports = router;