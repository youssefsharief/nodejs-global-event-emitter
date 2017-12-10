

// I need Event name since one command could have more than one event committed
// requestId is needed to publish event to ximux
function applyEvent(aggregate, event, applyFn, eventName, requestId) {
    try {
        const aggregateAfterEvent = applyFn(aggregate, event)
        saveEventToStore(requestId, event, aggregateAfterEvent, eventName)
        // return { event, aggregateAfterEvent, eventName}

        // var domainEventEnvelope = new DomainEventEnvelope(Id, ++LastEventSequence, Version, e);
        // _uncommittedEvents.Enqueue(domainEventEnvelope);

    } catch (err) {
        throw err
    }

}


saveEventToStore(requestId, event, aggregateAfterEvent, eventName)