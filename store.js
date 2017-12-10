

const requests= [
    {
        id: 'requestID', accountId: 'command.id',
        command: {
            payload: '(command)', commandName: 'approveAccount',
        }, 
        snapshot: {},
        eventsToBePlayed: [],
        eventsTobeStored: []
    }
]

const store = {requests: requests}
module.exports = store