const pubsub= require('./pubsub')

setInterval(()=>{
    pubsub.emit('command passed first stage', {s:'sa'})
}, 500)