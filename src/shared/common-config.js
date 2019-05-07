var oc = require('orthanc-client');
module.exports.client = new oc({
    url: 'http://localhost:8042',
    auth: {
      username: 'foo',
      password: 'bar'
    }
});

var express = require('express');
module.exports.router = express.Router();


