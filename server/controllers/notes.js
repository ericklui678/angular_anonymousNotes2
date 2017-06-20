var mongoose = require('mongoose');
var Note = mongoose.model('Quote');
module.exports = {
  show: function (req, res) {
    Note.find(function(err, data){
      if (err) {console.log(err);}
      if (data) {res.json(data);}
    })
  },
  create: function (req, res) {
    Note.create(req.body, function(err, data){
      if(err) {console.log(err);}
      if(data) {res.json(data);}
    })
  },
}