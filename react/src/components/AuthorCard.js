import { Link } from "react-router"

const AuthorCard =(props)=> {
    return (
        <div className="col">
            <div className="card author-card h-100">
                <img src={`/images/${props.img_url}`}alt={props.title} className="img-fluid image card-img-top h-100" />
                <div className="card-body">
                    <h2 className="card-title author-name text-capitalize">{props.author}</h2>
                </div>
                
            <footer className="card-footer">
                    View <Link to={`/author/${props.id}`} className="authorCard-link">books</Link> with this author
                </footer>
            </div>
        </div>
    )
}

export default AuthorCard

