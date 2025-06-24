import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import BookCard from "./BookCard";


const BooksbyAuthor =()=> {

    const [bookauthor, setBookAuthor ] = useState([])

    const params = useParams()

    useEffect(()=> {
        const url = `http://localhost:3005/api/author/author/${params.id}`
        axios.get(url).then(res => setBookAuthor(res.data))
    }, [])

    // console.log(bookauthor)

    const authorName = bookauthor.length > 0 ? bookauthor[0].author : "this author";

    const BookCardComponents = bookauthor.map(book => {
        return (
            <BookCard
                key={book.book_id}
                id={book.book_id}
                title={book.title}
                cover_image={book.cover_image}
            />
        )
    })

    return(
        <main className="main" id="booksbyauthorMain">
            <div className="container">
                <h2 className="text-capitalize author-heading text-capitalize mb-4">books by {authorName}</h2>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                    { BookCardComponents }
                </div>
            </div>
        </main>
    )
}

export default BooksbyAuthor