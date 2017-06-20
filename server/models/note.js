var mongoose = require('mongoose');
var NoteSchema = new mongoose.Schema({
    note: { type: String, required: [true, 'note required'], minlength: 3 }
}, { timestamps: true });
var Note = mongoose.model('Quote', NoteSchema);