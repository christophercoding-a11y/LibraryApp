import { useState, useEffect, use } from "react"
import { Routes, Route } from "react-router"


import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import AllBooks from "./components/AllBooks"
import Error from "./components/Error"
import axios from "axios"
import BookSingle from "./components/BookSingle"
import AllAuthors from "./components/AllAuthors"
import BooksbyAuthor from "./components/BooksbyAuthor"



const App =()=> {

    const [ books, setBooks ] = useState([])

    useEffect(()=> {
        const url = 'http://localhost:3005/api/book'

        
        axios.get(url).then(res => setBooks(res.data))
    }, [])


    const [ authors, setAuthors ] = useState([])

    useEffect(()=> {
        const url = 'http://localhost:3005/api/author'

        axios.get(url).then(res => setAuthors(res.data))
    }, [])

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/book" element={ <AllBooks books={books} />}/>
                <Route path="/author" element={ <AllAuthors authors={authors} />}/>
                <Route path="/author/:id" element={<BooksbyAuthor  />} />
                <Route path="/book/:id" element={ <BookSingle />} />

                <Route path="*" element={ <Error /> } />
            </Routes>
            <Footer />
        </>
    )
}

export default App