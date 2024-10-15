const mongoose = require("mongoose");
const { Schema } = mongoose;

const NotesSchema = new Schema({
  title: {
    type: String,
    required: true,
    s,
  },
  description: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("notes", NotesSchema);
