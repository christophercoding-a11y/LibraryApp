

const BookCard =(props)=> {
    return (
        <div className="col">
            <div className="card h-100 w-100">
                <img src={`/images/${props.cover_image}`}alt={props.title} className="img-fluid image card-img-top" />
                <div className="card-footer text-center">view more</div>
            </div>
        </div>
    )
}

export default BookCard