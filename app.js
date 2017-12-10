const pubsub= require('./pubsub')

const requestId =  Math.random(8);
const command = {id:'dasd', }
pubsub.emit('new command arrived', requestId, command, 'accountApproved')