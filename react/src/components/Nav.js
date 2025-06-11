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
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
                                <li><Link to={`/genre/1`} className="dropdown-item text-end sm-end dropdown-link">Fantasy</Link></li>
                                <li><Link to={`/genre/2`} className="dropdown-item text-end sm-end dropdown-link">Superhero</Link></li>
                                <li><Link to={`/genre/3`} className="dropdown-item text-end sm-end dropdown-link">Mystery</Link></li>
                                <li><Link to={`/genre/4`} className="dropdown-item text-end sm-end dropdown-link">Psychological</Link></li>
                                <li><Link to={`/genre/5`} className="dropdown-item text-end sm-end dropdown-link">Horror</Link></li>
                                <li><Link to={`/genre/6`} className="dropdown-item dropdown-link">Children's Literature</Link></li>
                                <li><Link to={`/genre/7`} className="dropdown-item text-end sm-end dropdown-link">Comedy</Link></li>
                                <li><Link to={`/genre/8`} className="dropdown-item text-end sm-end dropdown-link">Action</Link></li>
                                <li><Link to={`/genre/9`} className="dropdown-item text-end sm-end dropdown-link">Dark Fantasy</Link></li>
                                <li><Link to={`/genre/10`} className="dropdown-item text-end sm-end dropdown-link">Adventure</Link></li>
                                <li><Link to={`/genre/12`} className="dropdown-item text-end sm-end dropdown-link">Shonen</Link></li>
                                <li><Link to={`/genre/13`} className="dropdown-item text-end sm-end dropdown-link">Historical</Link></li>
                                <li><Link to={`/genre/14`} className="dropdown-item text-end sm-end dropdown-link">Martial Arts</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;