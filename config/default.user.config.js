const path = require('path')

const user = {
    // TestNet [0], MainNet [1], other nodes will come in future...
    node: 1,
    knownNodes: [
        {
            protocol: 'http',
            domain: '127.0.0.1',
            port: 62391,
            enableManagement: true
        },
        {
            protocol: 'http',
            domain: '127.0.0.1',
            port: 12391,
            enableManagement: true
        },
        {
            protocol: 'http',
            domain: 'node1.qortal.org',
            port: 62391,
            enableManagement: false
        },
        {
            protocol: 'http',
            domain: 'node1.qortal.org',
            port: 12391,
            enableManagement: false
        },
        {
            protocol: 'http',
            domain: 'node2.qortal.org',
            port: 62391,
            enableManagement: false
        },
        {
            protocol: 'http',
            domain: 'node2.qortal.org',
            port: 12391,
            enableManagement: false
        }
    ],
    nodeSettings: {
        pingInterval: 10 * 1000 // (10 secs)
    },
    version: 'v1.2.1-beta.3', // TODO: Set this dynamically...
    language: 'english', // default...english
    theme: 'light',
    server: {
        writeHosts: {
            enabled: true
        },
        relativeTo: path.join(__dirname, '../'),
        primary: {
            domain: '0.0.0.0',
            address: '0.0.0.0',
            port: 12388,
            directory: './src/',
            page404: './src/404.html',
            host: '0.0.0.0'
        }
    },
    tls: {
        enabled: false,
        options: {
            key: '',
            cert: ''
        }
    },
    constants: {
        pollingInterval: 10000, // How long between checking for new unconfirmed transactions and new blocks (in milliseconds).
        workerURL: '/build/worker.js'
    },

    // Notification Settings (All defaults to true)
    notifications: {
        q_chat: {
            playSound: true,
            showNotification: true
        },
        block: {
            playSound: true,
            showNotification: true
        }
    }
}

module.exports = user
