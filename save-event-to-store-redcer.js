function saveEventToStoreReducer(store, requestId, event, aggregateAfterEvent, eventName) {
    const updatedRequests = store.requests.map(req => {
        if (req.id === requestId) {
            req.eventsTobeStored = req.eventsTobeStored.concate({ payload: event, name: eventName, snapshotInCaseNeeded: aggregateAfterEvent })
            return req
        } else return req
    })
    store.requests = updatedRequests
    return store
}


