const path = require('path')

const user = {
    // New
    node: 0,
    knownNodes: [
        {
            protocol: 'http',
            port: 12391,
            domain: '127.0.0.1',
            enableManagement: true
        },
        {
            protocol: 'http',
            domain: '51.83.114.66',
            port: 62391
        }
    ],
    nodeSettings: {
        pingInterval: 10 * 60 * 1000
    },
    // End new
    version: process.env.npm_package_version,
    // user: {
    //     language: 'english', // default...english
    //     theme: 'light' // maybe could become dark
    // },
    language: 'english', // default...english
    theme: 'light', // maybe could become dark
    server: {
        writeHosts: {
            enabled: true
        },
        relativeTo: path.join(__dirname, '../'),
        primary: {
            domain: '127.0.0.1',
            address: '127.0.0.1', // What the domain should point to
            port: 12388, // Port to access the Qora UI from
            directory: './src/', // Core Qora-lite code.,
            page404: './src/404.html',
            host: '0.0.0.0' // This probably shouldn't be the default...
        },
        plugin: {
            domain: '127.0.0.1', // '*.domain' is used to host subdomains
            address: '127.0.0.1',
            // domain: 'frag.ui'
            port: 51432, // meh, why not keep it, who knows what kind of stuff people get into
            // port: 9087, // Disabled. Will now run on the same port as the host
            directory: './plugins', // Where the plugin folders are stored,
            default: 'wallet',
            host: '0.0.0.0' // frag.ui?
        }
    },
    // Might be better increased over a weaker or metered connection, or perhaps lowered when using a local node4
    tls: {
        enabled: false,
        options: {
            key: '',
            cert: ''
        }
    },
    constants: {
        pollingInterval: 3000, // How long between checking for new unconfirmed transactions and new blocks (in milliseconds).
        // proxyURL: '/proxy/', // nope!
        workerURL: '/build/worker.js' // Probably be replaced with something in all the build config
    }
}

module.exports = user
