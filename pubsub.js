var EventEmitter = require('events').EventEmitter
, pubsub = new EventEmitter();

pubsub.on('need data', function(msg) {
  console.log('ana el kbeer');
});

module.exports = pubsub;

const first = require('./1')
const second = require('./2')
