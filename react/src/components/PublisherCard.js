import { Link } from "react-router"

const PublisherCard =(props)=> {
    return (
        <div className="col">
            <div className="card publisher-card h-100">
                <img src={`/images/${props.img_url}`}alt={props.publisher} className="img-fluid image card-img-top h-100" />
                <div className="card-body">
                    <h2 className="card-title publisher-name text-capitalize">{props.publisher}</h2>
                </div>
                
            <footer className="card-footer">
                    View <Link to={`/publisher/${props.id}`} className="publisherCard-link">books</Link> by this publisher
                </footer>
            </div>
        </div>
    )
}

export default PublisherCard

