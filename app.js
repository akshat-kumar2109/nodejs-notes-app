const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");

// Customize yargs version
yargs.version("1.1.0");

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new Note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a Note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  // handler: function (argv) {
  //   notes.removeNote(argv.title);
  // },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

// Create read command
yargs.command({
  command: "read",
  describe: "Read a Note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

// Create list command
yargs.command({
  command: "list",
  describe: "List all Notes",
  handler() {
    notes.listNotes();
  },
});

// add, remove, read, list

yargs.parse(); // It seperates the required inputs

// console.log(yargs.argv);
