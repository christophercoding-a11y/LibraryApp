import PublisherCard from "./PublisherCard"

const AllPublishers = ({ publishers })=> {

    const PublisherCardComponents = publishers.map(publisher => {
        return (
            <PublisherCard
                key={publisher.publisher_id}
                id={publisher.publisher_id}
                publisher={publisher.author}
                img_url={publisher.img_url}
            />
        )
    })

        return (
        <main className="main" id="allPublishersMain">
            <div className="container">
                <h2 className="text-capitalize book-heading text-center text-capitalize">publishers</h2>
                <section className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                    { PublisherCardComponents }
                </section>
            </div>
        </main>
    )
}



export default AllPublishers