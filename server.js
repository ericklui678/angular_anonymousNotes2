var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    port = 3000;
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public/dist'));
mongoose.connect('mongodb://localhost/notes');

var Schema = mongoose.Schema;

var NoteSchema = new mongoose.Schema({
    note: { type: String, required: [true, 'note required'], minlength: 3 }
}, { timestamps: true });
var Note = mongoose.model('Quote', NoteSchema);

app.get('/notes', function(req, res, next){
    console.log('inside notes');
    Note.find(function(err, data){
        if (err) {console.log(err);}
        if (data) {res.json(data);}
    })
})

app.post('/new', function(req, res, next) {
    console.log('inside /NEW')
    Note.create(req.body, function(err, data){
        if(err) {console.log(err);}
        if(data) {res.json(data);}
    })
});

app.listen(port, function(){
    console.log('running on', port);
})
