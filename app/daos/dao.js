const daoCommon = require('./common/daoCommon')

const bookDao = {
    ...daoCommon,
    ...require('./api/bookDao')
}

const authorDao = {
    ...daoCommon,
    ...require('./api/authorDao')
}

module.exports = {
    bookDao,
    authorDao
}