'use strict'

const Hapi = require('@hapi/hapi')
const ping = require('./routes/ping')
const qoutes = require('./routes/qoutes')

const init = async () => {
    const server = Hapi.server({
        port: 6000,
        host: '0.0.0.0'
    })

    server.route(ping.ping)
    server.route(qoutes.getQoute)

    await server.start()
    console.log(`Server running on ${server.info.uri}`)
}

process.on('uncaughtRejection', err => {
    console.log(err)
    process.exit(1)
})

init()