'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const rp = require('request-promise');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());

app.post('/invoke', function(req, res) {
  var service = req.body.service;
  var payload = req.body.payload;

  rp.post({ method: 'POST', uri: service, body: payload, json: true }).
    then(function(result) {
      res.json(result);
    }).
    catch(function(err) {
      res.json({ status: 'error', message: err });
    });
});

app.listen(PORT);

console.log('Running on http://localhost:' + PORT);
