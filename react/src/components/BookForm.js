import { useState, useEffect } from "react"
import axios from "axios"

const BookForm =(props)=> {

    const [ authors, setAuthors ] = useState([])
    const [ publishers, setPublishers ] = useState([])

    useEffect(()=> {
        const authUrl = 'http://localhost:3005/api/author'
        const publiUrl = 'http://localhost:3005/api/publisher'

        axios.get(authUrl).then(res => setAuthors(res.data))
        axios.get(publiUrl).then(res => setPublishers(res.data))
    }, [])

    const authorDivs = authors.map(author => {
        return (
            <div className="form-check form-check-inline " key={author.author_id}>
                <input
                    className="form-check-input"
                    type="radio"
                    name="author_id"
                    defaultValue={author.author_id}
                    id={author.author}
                    onChange={props.handleChange}
                />
                <label className="form-check-label" htmlFor={author.author}>
                    {author.author}
                </label>
            </div>
        )
    })

    
    const publisherDivs = publishers.map(publisher => {
        return (
            <div className="form-check form-check-inline" key={publisher.publisher_id}>
                <input
                    className="form-check-input"
                    type="radio"
                    name="publisher_id"
                    defaultValue={publisher.publisher_id}
                    id={publisher.publisher}
                    onChange={props.handleChange}
                />
                <label className="form-check-label" htmlFor={publisher.publisher}>
                    {publisher.publisher}
                </label>
            </div>
        )
    })

    return(
        <>
        { props.isPostSuccess.isSuccess ? <Success /> :
        <main className="main" id="bookFormMain">
            <div className="container">
                <form className="book-form form" onSubmit={ props.handleSubmit }>
                    <div className="row mb-3">
                        <div className="col-12 col-md-6 col-lg-4">
                            <label htmlFor="bookTitle" className="form-label">title</label>
                            <input 
                                id="bookTitle" 
                                type="text"
                                className="form-control" 
                                name="title"
                                value={props.formData.title}
                                onChange={props.handleChange}
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-12 col-md-6 col-lg-4">
                            <label htmlFor="copyright_year" className="form-label">Copyright year</label>
                            <input 
                                id="copyrightYear" 
                                type="number"
                                className="form-control" 
                                name="copyright_year"
                                min="1900"
                                max="2050"
                                step="1"
                                value={props.formData.copyright_year}
                                onChange={props.handleChange}
                            />
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <label htmlFor="edition" className="form-label">edition</label>
                            <input
                                id="edition"
                                type="text"
                                className="form-control"
                                name="edition"
                                value={props.formData.edition}
                                onChange={props.handleChange}
                            />
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <label htmlFor="firstApp" className="form-label">edition year</label>
                            <input
                                id="editionYear"
                                type="number"
                                className="form-control"
                                name="edition_year"
                                min="1900"
                                max="2050"
                                step="1"
                                value={props.formData.edition_year}
                                onChange={props.handleChange}
                            />
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <label htmlFor="rating" className="form-label rating-text mt-3">rating 1-5</label>
                            <input
                                id="editionYear"
                                type="number"
                                className="form-control"
                                name="rating"
                                min="1"
                                max="5"
                                step="1"
                                value={props.formData.rating}
                                onChange={props.handleChange}
                            />
                        </div>
                        <div className="col">
                            <div className="binding-box">
                                <p className="form-text">Binding</p>
                                <div className="form-check">
                                    <input
                                    className="form-check-input"
                                    type="radio"
                                    name="binding"
                                    defaultValue="paperback"
                                    id="pbBinding"
                                    onChange={props.handleChange}
                                />
                                <label className="form-check-label" htmlFor="pbBinding">Paper-back</label>
                                </div>
                                <div className="form-check">
                                    <input
                                    className="form-check-input"
                                    type="radio"
                                    defaultValue="hardback"
                                    name="binding"
                                    id="hbBinding"
                                    onChange={props.handleChange}
                                />
                                <label className="form-check-label" htmlFor="hbBinding">Hard-back</label>
                                </div>
                                <div className="form-check">
                                    <input
                                    className="form-check-input"
                                    type="radio"
                                    defaultValue="e-book"
                                    name="binding"
                                    id="ebBinding"
                                    onChange={props.handleChange}
                                />
                                <label className="form-check-label" htmlFor="ebBinding">e-book</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-12 col-md-6 col-lg-4">
                            <label htmlFor="booklanguage" className="form-label">Language</label>
                            <input 
                                id="BookLanguage" 
                                type="text"
                                className="form-control" 
                                name="language"
                                value={props.formData.language}
                                onChange={props.handleChange}
                            />
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <label htmlFor="numpages" className="form-label">num of pages</label>
                            <input 
                                id="numPages" 
                                type="text"
                                className="form-control" 
                                name="num_pages"
                                value={props.formData.num_pages}
                                onChange={props.handleChange}
                            />
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <label htmlFor="quantity" className="form-label">Quantity</label>
                            <input 
                                id="Quantity" 
                                type="text"
                                className="form-control" 
                                name="qty"
                                value={props.formData.qty}
                                onChange={props.handleChange}
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <div className="author-box">
                                <p className="form-text">Authors</p>
                                { authorDivs }
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <div className="species-box">
                                <p className="form-text">Publishers</p>
                                { publisherDivs }
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <div className="input-group mb-3">
                                <span className="input-group-text">Image</span>
                                <input
                                    className="form-control"
                                    type="file"
                                    name="cover_image"
                                    onChange={props.handleChange}
                                    value={props.cover_image}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row button-row">
                    <div className="col">
                        <button className="btn btn-primary">Add Book</button>
                    </div>
                    </div>
                </form>
            </div>
        </main>
        }
        </>
    )

}

const Success =()=> {
    return (
        <div className="container">
            <h2>Book was successfully added.</h2>
        </div>
    )
}

export default BookForm