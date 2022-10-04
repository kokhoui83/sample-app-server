'use strict'

const Hapi = require('@hapi/hapi')

const init = async () => {
    const server = Hapi.server({
        port: 6000,
        host: '0.0.0.0'
    })

    server.route({
        method: 'GET',
        path: '/ping',
        handler: (_request, _header) => {
            return 'pong'
        }
    })

    await server.start()
    console.log(`Server running on ${server.info.uri}`)
}

process.on('uncaughtRejection', err => {
    console.log(err)
    process.exit(1)
})

init()