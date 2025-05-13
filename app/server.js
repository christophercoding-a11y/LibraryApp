const express = require('express')
const server = express()
const helmet = require('helmet')
const cors = require('cors')
const port = process.env.port || 3005

server.use(helmet.contentSecurityPolicy({
    useDefaults: true,
    crossOriginResourcePolicy: false,
    crossOriginEmbedderPolicy: false,
    directives: {
        "img-src": ["'self'", "https: data:"],
        "scriptSrc": ["'self'", "cdn.jsdelivr.net"]
    }
}))

server.use(cors())
    .use(express.json())
    .use(express.urlencoded({extended: true}))





server.listen(port, ()=> console.log(`Porty over here in Room ${port}`))