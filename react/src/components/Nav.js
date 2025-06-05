import { Link } from "react-router"

const Nav =()=> {

    return (
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
                <Link to="/book" className="nav-link">Books</Link>
            </li>
        </ul>
    )
}

export default Nav