var express = require('express');
var router = express.Router();
var db = require('../src/db.js');
// var mailcomposer = require('mailcomposer');
// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// require('dotenv').load();
var dotenv = require('dotenv');
dotenv.load();

/* GET index page. */
router.get('/', function(req, res, next) {
  db.Preferences().then(function(data) {
    res.send({payload:data});
  })
});

router.get('/:id', function(req, res, next) {
  db.preference(req.params.id).first().then(function(data) {
    res.send({payload:data});
  });
});

router.get('/:id/group', function(req, res, next) {
  db.preferenceGroup(req.params.id).then(function(data) {
    res.send({payload:data});
  });
});

router.post('/:id/edit', function(req, res, next) {
  console.log('got to post preference route with id and req.body', req.params.id, ' ', req.body.json);
  console.log('req.body: ', req.body);
  console.log('req.body.json: ', req.body.json);
  console.log('req.body.json["data"]: ', req.body.json["data"]);
  console.log('req.body.json.data: ', req.body.json.data);
  db.updatePreference(req.params.id, {"time":"19:00:00","day":"Saturday","periodicity":"biweekly"}).then(function(data) {
  // db.updatePreference(req.params.id, req.body.json.data).then(function(data) {
    console.log('did the updatePreference', req.body.json.data);;
  })
})

module.exports = router;
