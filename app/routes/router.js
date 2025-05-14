const express = require('express')
const router = express.Router()

const port = process.env.port || 3005

// root route
router.get('/api', (req, res)=> {
    res.json({
        'Books': `http://localhost:${port}/api/book`,
    })
})

const endpoints = [
    'book'
]

endpoints.forEach(endpoint => {
    router.use(`/api/${endpoint}`, require(`./api/${endpoint}Routes`))
})



module.exports = router