const pubsub= require('./pubsub')

setInterval(()=>{
    pubsub.emit('need data', {s:'sa'})
}, 500)