import { useState, useEffect, } from "react"
import { Routes, Route, } from "react-router"
import axios from "axios"

import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import AllBooks from "./components/AllBooks"
import Error from "./components/Error"
import BookSingle from "./components/BookSingle"
import AllAuthors from "./components/AllAuthors"
import BooksbyAuthor from "./components/BooksbyAuthor"
import BooksbyPublisher from "./components/BooksbyPublisher"
import BooksByGenre from "./components/BooksbyGenre"
import BooksByFormat from "./components/BooksbyFormat"
import AllPublishers from "./components/AllPublishers"
import BookForm from "./components/BookForm"





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

    const [ publishers, setPublishers ] = useState([])

    useEffect(()=> {
        const url = 'http://localhost:3005/api/publisher'

        axios.get(url).then(res => setPublishers(res.data))
    }, [])




    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/book" element={ <AllBooks books={books} />}/>
                <Route path="/book/:id" element={ <BookSingle />} />
                <Route path="/author" element={ <AllAuthors authors={authors} />}/>
                <Route path="/publisher" element={ <AllPublishers publishers={publishers} />}/>
                <Route path="/author/:id" element={<BooksbyAuthor  />} />
                <Route path="/publisher/:id" element={<BooksbyPublisher  />} />
                <Route path="/genre/:id" element={ <BooksByGenre />} />
                <Route path="/format/:id" element={ <BooksByFormat />} />
                <Route path="/bookForm" element={ <BookForm />} />


            

                <Route path="*" element={ <Error /> } />
            </Routes>
            <Footer />
        </>
    )
}

export default App