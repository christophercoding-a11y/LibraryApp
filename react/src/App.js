import { useState, useEffect } from "react"
import { Routes, Route } from "react-router"


import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import AllBooks from "./components/AllBooks"
import Error from "./components/Error"
import axios from "axios"
import BookSingle from "./components/BookSingle"



const App =()=> {

    const [ books, setBooks ] = useState([])

    useEffect(()=> {
        const url = 'http://localhost:3005/api/book'

        
        axios.get(url).then(res => setBooks(res.data))
    }, [])
    console.log(books)

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/book" element={ <AllBooks books={books} />}/>
                <Route path="/book/:id" element={ <BookSingle />} />

                <Route path="*" element={ <Error /> } />
            </Routes>
            <Footer />
        </>
    )
}

export default App