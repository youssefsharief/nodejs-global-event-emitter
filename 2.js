const pubsub= require('./pubsub')

pubsub.on('need data', function(msg) {
    console.log(msg);
  });