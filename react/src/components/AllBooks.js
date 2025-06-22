

import { Link } from "react-router";
import BookCard from "./BookCard";

const AllBooks =({ books })=> {
    

    const BookCardComponents = books.map(book => {
        return (
            <BookCard
                key={book.book_id}
                id={book.book_id}
                title={book.title}
                cover_image={book.cover_image}
            />
        )
    })

    






    return (
        <main className="main" id="allBooksMain">
            <div className="container">
                
                <p className="text-end">
                    <Link to="/bookForm" className="form-link">Add a book</Link>
                </p>
                <h2 className="text-capitalize book-heading text-center">Books</h2>
                <section className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                    { BookCardComponents }
                </section>
            </div>
        </main>
    )
}

export default AllBooks