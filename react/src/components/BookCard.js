import { Link } from "react-router"

const BookCard =(props)=> {
    return (
        <div className="col">
            <div className="card h-100 w-100">
                <img src={`/images/${props.cover_image}`}alt={props.title} className="img-fluid image card-img-top" />
                
            <footer className="card-footer">
                    <Link to={`/book/${props.id}`}>view more</Link>
                </footer>
            </div>
        </div>
    )
}

export default BookCard