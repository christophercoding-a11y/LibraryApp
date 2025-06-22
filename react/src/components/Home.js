import { useEffect } from "react";

const Home = (props) => {

    useEffect(() => {
        props.resetData();
        
    }, []);

    return (
        <main className="main" id="homeMain">
            <div className="container home-container text-center py-5">
                <h1 className="home-title text-capitalize">Welcome to My Library App</h1>
                <p className="home-subtitle fst-italic">Organize. Explore. Enjoy your personal book collection.</p>
            </div>
        </main>
    );
};

export default Home;