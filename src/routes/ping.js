module.exports = {
    ping: {
        method: 'GET',
        path: '/ping',
        handler: (_request, _header) => {
            return 'pong'
        }
    }
}