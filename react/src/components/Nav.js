import { Link } from "react-router";

const Nav = () => {
    return (
        <div className="text-end mt-3">
            <div className="dropdown d-lg-none mb-5">
                <button 
                    className="btn btn-secondary dropdown-toggle" 
                    type="button" 
                    id="navDropdown" 
                    data-bs-toggle="dropdown" 
                    aria-expanded="false"
                >
                    select tab
                </button>
                <ul className="dropdown-menu" aria-labelledby="navDropdown">
                    <li><Link to="/" className="dropdown-item">Home</Link></li>
                    <li><Link to="/book" className="dropdown-item">Books</Link></li>
                </ul>
            </div>
            <nav className="d-none d-lg-flex justify-content-center">
                <Link to="/" className="btn btn-link">Home</Link>
                <Link to="/book" className="btn btn-link">Books</Link>
            </nav>
        </div>
    )
}

export default Nav;