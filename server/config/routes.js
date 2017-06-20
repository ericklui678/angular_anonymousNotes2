var notes = require('../controllers/notes.js')
module.exports = function(app) {
  app.get('/notes', function(req, res, next){
    notes.show(req, res);
})

  app.post('/new', function(req, res, next) {
    notes.create(req, res)
  })
}