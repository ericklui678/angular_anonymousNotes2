var express = require('express'),
    bodyParser = require('body-parser'),
    // mongoose = require('mongoose'),
    port = 3000;
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + './../public/dist'));
// mongoose.connect('mongodb://localhost/notes');

// var Schema = mongoose.Schema;
require('./config/mongoose.js');
// var NoteSchema = new mongoose.Schema({
//     note: { type: String, required: [true, 'note required'], minlength: 3 }
// }, { timestamps: true });
// var Note = mongoose.model('Quote', NoteSchema);

// store the route function in variable
var routes_setter = require('./config/routes.js');
// invoke the function stored in routes_setter and pass to app
routes_setter(app);

app.listen(port, function(){
    console.log('running on', port);
})
