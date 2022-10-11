const data = require('./data.json')

const randomQoute = () => {
    const max = data.quotes.length
    const random = Math.floor(Math.random() * max)

    return data.quotes[random]
}

module.exports = {
    getQoute: {
        method: 'GET',
        path: '/qoute',
        handler: (_request, _header) => {
            const qoute = randomQoute()

            return qoute
        }
    }
}