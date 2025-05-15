const express = require('express')
const router = express.Router()


const { authorDao: dao } = require('../../daos/dao')

// localhost3005:/api/author
router.get('/', (req, res)=> {
    dao.findAll(res, dao.table)
})

module.exports = router