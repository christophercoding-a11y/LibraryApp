const con = require('../../config/dbconfig')

const formatDao = {
    table: 'format',

    findBooksByGenre: (res, table, genre) => {
        con.execute(
            `select b.book_id, g.genre
            from book b
            join book_to_genre bg on b.book_id = bg.book_id
            join genre g on g.genre_id = bg.genre_id
            where g.genre = ${genre};`,
            (error, rows)=> {
                if (!error) {
                    if (rows.length === 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log('DAO ERROR:', error)
                }
            }
        )
    }
}

module.exports = formatDao