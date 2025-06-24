const con = require('../../config/dbconfig');

const bookDao = {
    table: 'book',

    findBooks: (res, table) => {
        con.execute(
            `select b.book_id, b.title, a.author, p.publisher, b.copyright_year,
            b.edition, b.edition_year, b.binding, b.rating, b.language,
            b.num_pages, b.qty, b.cover_image
            from book b
            join author a USING (author_id)
            join publisher p USING (publisher_id)
            order by b.book_id;`,
            (error, rows) => {
                if (error) {
                    console.log('DAO ERROR:', error);
                    return res.status(500).json({ error: "Database error" });
                }
                res.json(rows.length === 1 ? rows[0] : rows);
            }
        );
    },

    findbookById: (res, table, id) => {
        let genres = [];
        let formats = [];

        
        con.execute(
            `select g.genre
            FROM book_to_genre bg
            join genre g on g.genre_id = bg.genre_id
            where bg.book_id = ?;`,
            [id],
            (error, genreRows) => {
                if (error) {
                    console.log("Genres query error:", error);
                    return res.status(500).json({ error: "Error fetching genres" });
                }

                genres = genreRows.map(row => row.genre);
                con.execute(
                    `SELECT f.format
                    FROM book_to_format bf
                    join format f ON f.format_id = bf.format_id
                    where bf.book_id = ?;`,
                    [id],
                    (error, formatRows) => {
                        if (error) {
                            console.log("Formats query error:", error);
                            return res.status(500).json({ error: "Error fetching formats" });
                        }

                        formats = formatRows.map(row => row.format);

                        
                        con.execute(
                            `select b.book_id, b.title, a.author, p.publisher, b.copyright_year,
                            b.edition, b.edition_year, b.binding, b.rating, b.language,
                            b.num_pages, b.qty, b.cover_image
                            from book b
                            join author a USING (author_id)
                            join publisher p USING (publisher_id)
                            where b.book_id = ?;`,
                            [id],
                            (error, bookRows) => {
                                if (error) {
                                    console.log("Book query error:", error);
                                    return res.status(500).json({ error: "Error fetching book" });
                                }
                                if (bookRows.length === 0) {
                                    return res.status(404).json({ message: "Book not found" });
                                }
                                const book = bookRows[0];
                                book.genres = genres;
                                book.formats = formats;
                                res.json(book);
                            }
                        );
                    }
                );
            }
        );
    },

    findByBinding: (res, table, binding) => {
        con.execute(
            `select ${table}.book_id, ${table}.title, a.author, p.publisher,
            ${table}.copyright_year, ${table}.edition, ${table}.edition_year,
            ${table}.binding, ${table}.rating, ${table}.language,
            ${table}.num_pages, ${table}.cover_image
            FROM ${table}
            join author a USING (author_id)
            join publisher p USING (publisher_id)
            where ${table}.binding = ?
            order by ${table}.book_id`,
            [binding],
            (error, rows) => {
                if (error) {
                    console.log('DAO ERROR:', error);
                    return res.status(500).json({ error: "Database error" });
                }
                res.json(rows.length === 1 ? rows[0] : rows);
            }
        );
    },

    findByLanguage: (res, table, language) => {
        con.execute(
            `select ${table}.book_id, ${table}.title, a.author, p.publisher,
            ${table}.copyright_year, ${table}.edition, ${table}.edition_year,
            ${table}.binding, ${table}.rating, ${table}.language,
            ${table}.num_pages, ${table}.cover_image
            from ${table}
            join author a USING (author_id)
            join publisher p USING (publisher_id)
            where ${table}.language = ?
            order by ${table}.book_id`,
            [language],
            (error, rows) => {
                if (error) {
                    console.log('DAO ERROR:', error);
                    return res.status(500).json({ error: "Database error" });
                }
                res.json(rows.length === 1 ? rows[0] : rows);
            }
        );
    },

    sort: (res, table) => {
        con.execute(
            `SELECT ${table}.book_id, ${table}.title, a.author, p.publisher,
            ${table}.copyright_year, ${table}.edition, ${table}.edition_year,
            ${table}.binding, ${table}.rating, ${table}.language,
            ${table}.num_pages, ${table}.cover_image
            from ${table}
            from author a USING (author_id)
            join publisher p USING (publisher_id)
            order by a.author`,
            (error, rows) => {
                if (error) {
                    console.log('DAO ERROR:', error);
                    return res.status(500).json({ error: "Database error" });
                }
                res.json(rows.length === 1 ? rows[0] : rows);
            }
        );
    }
};

module.exports = bookDao;