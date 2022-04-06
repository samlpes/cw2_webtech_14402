console.log("Starting app.js");
const express = require('express')
const yargs = require('yargs');
const notes = require('./notes.js');
const argv = yargs.argv;

const app = express()
const path = require('path');
const { dirname } = require('path');

var title = yargs.argv.title;
var body = yargs.argv.body;
var command = yargs.argv._[0];

if (command === "add") {
  console.log("adding note");
  notes.addingNote(title, body);
} else if (command === "remove") {
  console.log("removing note");
  notes.removeNote(title);
} else if (command === "read") {
  console.log("reading note");
  notes.readNote(title);
} else if (command === "list") {
  console.log("listing all notes");
  notes.getAll();
} else {
  console.log("Unknown command was used!");
}
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'))
})
