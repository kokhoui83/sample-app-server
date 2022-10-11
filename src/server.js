'use strict'

const Hapi = require('@hapi/hapi')
const ping = require('./routes/ping')
const qoutes = require('./routes/qoutes')

const init = async () => {
    const PORT = process.env.PORT || 5001
    const HOST = process.env.HOST || '0.0.0.0'

    // server config
    const server = Hapi.server({
        port: PORT,
        host: HOST,
        routes: {
            cors: {
                origin: [
                    'http://localhost:5173',
                    'http://localhost:4173',
                    'http://localhost:5000'
                ]
            }
        }
    })

    // setup routes
    server.route(ping.ping)
    server.route(qoutes.getQoute)

    // start server
    await server.start()
    console.log(`Server running on ${server.info.uri}`)
}

process.on('uncaughtRejection', err => {
    console.log(err)
    process.exit(1)
})

init()