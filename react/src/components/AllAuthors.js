import AuthorCard from "./AuthorCard"

const AllAuthors = ({ authors })=> {

    const AuthorCardComponents = authors.map(author => {
        return (
            <AuthorCard
                key={author.author_id}
                id={author.author_id}
                author={author.author}
                img_url={author.img_url}
            />
        )
    })

        return (
        <main className="main" id="allBooksMain">
            <div className="container">
                <h2 className="text-capitalize book-heading text-center">Authors</h2>
                <section className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                    { AuthorCardComponents }
                </section>
            </div>
        </main>
    )
}



export default AllAuthors