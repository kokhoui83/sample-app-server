const assert = require('assert')
const qoutes = require('../../../src/routes/qoutes')

describe('Route /qoute', () => {
    context('Trigger GET /qoute handler', () => {
        it('should return a qoute', () => {
            const qoute = qoutes.getQoute.handler(null, null)
            assert(qoute)
        })
    })
})