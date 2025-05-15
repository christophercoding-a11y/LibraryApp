const daoCommon = require('./common/daoCommon')

const bookDao = {
    ...daoCommon,
    ...require('./api/bookDao')
}

const authorDao = {
    ...daoCommon,
    ...require('./api/authorDao')
}

const publisherDao = {
    ...daoCommon,
    ...require('./api/publisherDao')
}




module.exports = {
    bookDao,
    authorDao,
    publisherDao
}