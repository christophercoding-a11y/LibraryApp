const express = require('express')
const router = express.Router()

const { bookDao: dao } = require('../../daos/dao')

// localhost:3005/api/book
router.get('/', (req, res)=> {
    dao.findBooks(res, dao.table)
})

// localhost:3005/api/book/id
router.get('/:id', (req, res)=> {
    dao.findbookById(res, dao.table, req.params.id)
})


module.exports = router