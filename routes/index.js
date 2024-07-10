var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MD18402' });
});

router.get('/home', function(req, res, next) {
  res.render('home', { data: 'MD18402', point: 10 });
});

router.get('/chitietsp', function(req, res, next) {

  let jsonData = `{
  "title": "The Basics - Networking",
  "description": "Your app fetched this from a remote endpoint!",
  "movies": [
    { "id": "1", "title": "Star Wars", "releaseYear": "1977" },
    { "id": "2", "title": "Back to the Future", "releaseYear": "1985" },
    { "id": "3", "title": "The Matrix", "releaseYear": "1999" },
    { "id": "4", "title": "Inception", "releaseYear": "2010" },
    { "id": "5", "title": "Interstellar", "releaseYear": "2014" }
  ]
}`
  //res.send(jsonData)
  res.render('chitietsp');
});

module.exports = router;
