
const con = require('../../config/dbconfig')

const formatDao = {
    table: 'format',

    findBooksByFormat: (res, table, format) => {
        con.execute(
            `select b.book_id, f.format
            from book b
            join book_to_format bf on b.book_id = bf.book_id
            join format f on f.format_id = bf.format_id
            where f.format = ${format};`,
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