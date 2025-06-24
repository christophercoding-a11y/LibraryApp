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

    const [ formData, setFormData ] = useState({
        title: '',
        author_id: 0,
        publisher_id: 0,
        copyright_year: 1900,
        edition: '',
        edition_year: 1900,
        binding: '',
        rating: 1,
        language: '',
        num_pages: '',
        qty: 1,
        cover_image: ''
    })

    const [ isPostSuccess, setIsPostSuccess] = useState({
        isSuccess: false,
        id: 0
    })

    const resetData=()=> {
        setIsPostSuccess({
            isSuccess: false,
            id: 0
        })

        setFormData({
        title: '',
        author_id: 0,
        publisher_id: 0,
        copyright_year: 1900,
        edition: '',
        edition_year: 1900,
        binding: '',
        rating: 1,
        language: '',
        num_pages: '',
        qty: 1,
        cover_image: ''
        })
    }

    const handleSubmit =(e)=> {
        e.preventDefault()
        console.log(formData)

        axios({
            method: 'post',
            url: 'http://localhost:3005/api/book/post',
            data: formData
        }).then(response => {
            setIsPostSuccess({isSuccess: true, id: response.data.Last_id})
        })
    }

    const handleChange =(event)=> {
        const { name, value } = event.target

        setFormData(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }




    return (
        <>
            <Header />
            <Routes>
                { isPostSuccess.isSuccess && <Route path={`/hero/${isPostSuccess.id}`} element={ <BookSingle />} />}
                <Route path="/" element={ <Home resetData={ resetData }/> }  /> 
                <Route path="/book" element={ <AllBooks  books={books} resetData={resetData }/>}/>
                <Route path="/book/:id" element={ <BookSingle /> } />
                <Route path="/author" element={ <AllAuthors authors={authors}  />}/>
                <Route path="/publisher" element={ <AllPublishers publishers={publishers}  />}/>
                <Route path="/author/:id" element={<BooksbyAuthor  />}  />
                <Route path="/publisher/:id" element={<BooksbyPublisher  />}  />
                <Route path="/genre/:id" element={ <BooksByGenre />}  />
                <Route path="/format/:id" element={ <BooksByFormat />}  />
                    <Route 
                    path="/bookForm" 
                    element={ <BookForm 
                        handleSubmit={ handleSubmit } 
                        handleChange={handleChange} 
                        formData={formData}  
                        isPostSuccess={isPostSuccess}
                        
                    />} 
                />



            

                <Route path="*" element={ <Error /> } />
            </Routes>
            <Footer />
        </>
    )
}

export default App