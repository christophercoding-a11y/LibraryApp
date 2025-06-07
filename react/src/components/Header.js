import Nav from "./Nav"


import { IoLibrary } from "react-icons/io5";

const Header =()=> {
    return (
        <header className="header" id="header">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className="heading text-capitalize"> <IoLibrary className="icon" />my library app</h1>
                    </div>
                    <div className="col">
                        <Nav />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header