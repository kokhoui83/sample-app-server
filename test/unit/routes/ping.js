const assert = require('assert')
const ping = require('../../../src/routes/ping')

describe('Route /ping', () => {
    context('Trigger /ping handler', () => {
        it('should return pong', () => {
            const result = ping.ping.handler(null, null)
            assert.equal('pong', result)
        })
    })
})