const EventEmitter = require('events').EventEmitter
const pubsub = new EventEmitter();
const store = require('./store')


pubsub.on('need data', function (msg) {
    console.log('ana el kbeer');
});


pubsub.on('new command arrived', function (requestId, command, commandName) {
    console.log('processing new command')
    store = newCommandArrivedReducer(store, { id: requestId, accountId: command.id, command: command, dateAdded: Date.now(), currentVersion: 0 })
    console.log('store updated')
});

function newCommandArrivedReducer(store, payload) {
    if (!store) store = {}
    if (!store.requests.length) store.requests = []
    store.requests.push({ id: requestId, accountId: command.id, command: command, dateAdded: Date.now(), currentVersion: 0 })
    return store
}

function saveEventToStore(requestId, event, aggregateAfterEvent, eventName) {
    store = saveEventToStoreReducer(store, requestId, event, aggregateAfterEvent, eventName)
}

function saveEventToStoreReducer(store, requestId, event, aggregateAfterEvent, eventName) {
    const updatedRequests = store.requests.map(req => {
        if (req.id===requestId) {
            req.eventsTobeStored = req.eventsTobeStored.concate({payload:event, name: eventName, snapshotInCaseNeeded: aggregateAfterEvent})
            return req
        } else return req
    })
    store.requests = updatedRequests
    return store
    
}





module.exports = pubsub;

const first = require('./1')
const second = require('./2')
