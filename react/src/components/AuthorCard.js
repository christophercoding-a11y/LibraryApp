import { Link } from "react-router"

const AuthorCard =(props)=> {
    return (
        <div className="col">
            <div className="card author-card h-100">
                <img src="https://placehold.co/50x50"alt="placeholder img" class="img-fluid image" />
                <div className="card-body">
                    <h2 className="card-title text-capitalize">{props.author}</h2>
                </div>
                
            <footer className="card-footer">
                    <Link to={`/book/${props.id}`} className="bookSingle-link link-unstyled">Click here to view books by this author</Link>
                </footer>
            </div>
        </div>
    )
}

export default AuthorCard

