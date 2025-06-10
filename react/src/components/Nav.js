import { Link } from "react-router";

const Nav = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <button
                    className="navbar-toggler ms-auto"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li className="nav-item  ms-auto">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item  ms-auto">
                            <Link to="/book" className="nav-link">Books</Link>
                        </li>
                        <li className="nav-item ms-auto">
                            <Link to="/author" className="nav-link">Authors</Link>
                        </li>
                        <li className="nav-item ms-auto">
                            <Link to="/publisher" className="nav-link">Publishers</Link>
                        </li>
                        <li className="nav-item dropdown ms-auto">
                            <button
                                className="nav-link dropdown-toggle btn btn-link ms-auto"
                                id="navbarDropdown"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Genres
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link to="#" className="dropdown-item">Fantasy</Link></li>
                                <li><Link to="#" className="dropdown-item">Superhero</Link></li>
                                <li><Link to="#" className="dropdown-item">Mystery</Link></li>
                                <li><Link to="#" className="dropdown-item ">Psychological</Link></li>
                                <li><Link to="#" className="dropdown-item">Horror</Link></li>
                                <li><Link to="#" className="dropdown-item">Children's Literature</Link></li>
                                <li><Link to="#" className="dropdown-item">Comedy</Link></li>
                                <li><Link to="#" className="dropdown-item">Action</Link></li>
                                <li><Link to="#" className="dropdown-item ">Dark Fantasy</Link></li>
                                <li><Link to="#" className="dropdown-item">Adventure</Link></li>
                                <li><Link to="#" className="dropdown-item">Supernatural</Link></li>
                                <li><Link to="#" className="dropdown-item">Shonen</Link></li>
                                <li><Link to="#" className="dropdown-item">Historical</Link></li>
                                <li><Link to="#" className="dropdown-item">Martial Arts</Link></li>
                            </ul>
                            
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;