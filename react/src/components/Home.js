import { useEffect } from "react"

const Home =(props)=> {
    
    useEffect(()=> {
        props.resetData()
    }, [])
    
    return (
        <main className="main">
            <div className="container">
                <h2 className="home-text text-capitalize">welcome to my library app</h2>
            </div>
        </main>
    )
}

export default Home