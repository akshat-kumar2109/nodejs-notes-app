const chalk = require("chalk");
const fs = require("fs");

// Add Note
const addNote = (title, body) => {
  const notes = loadNotes();
  //   const duplicateNotes = notes.filter((note) => note.title === title);
  const duplicateNote = notes.find((note) => note.title === title);

  if (duplicateNote === undefined) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("New note added!"));
  } else {
    console.log(chalk.red.inverse("Note title taken!"));
  }
};

// Remove Note
const removeNote = (title) => {
  const notes = loadNotes();
  if (notes.length === 0) {
    console.log(chalk.bgRed("No notes to delete."));
    return;
  }

  const noteToKeep = notes.filter((note) => note.title !== title);

  if (notes.length > noteToKeep.length) {
    saveNotes(noteToKeep);
    console.log(chalk.green.inverse("Note deleted!"));
  } else {
    console.log(chalk.red.inverse("No note found"));
  }
};

// Read note
const readNote = (title) => {
  const notes = loadNotes();

  const note = notes.find((note) => note.title === title);

  if (note) {
    console.log(chalk.green.inverse(note.title));
    console.log(chalk.inverse(note.body));
  } else {
    console.log(chalk.red.inverse("No note found"));
  }
};

// List all Notes
const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.green.inverse("Your notes are: "));
  notes.forEach((note) => console.log(chalk.inverse(note.title)));
};

// Save Notes
const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

// Load Notes
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

// Exports
module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  readNote: readNote,
  listNotes: listNotes,
};
