import React from 'react'
import './Cardbooks.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { url } from '../../../resource';
import whitepage from '../../images/whitepage.jpg';

const Cardbooks = ({ id, title, author, publisher, release_date, pages, getbooks }) => {
    const navigate = useNavigate();

    async function deletebook(id) {
        await axios.delete(`http://localhost:3001/Books/${id}`);
        getbooks();
        alert("book is deleted ")
         
    }
    const updateBook = (id) => {
        navigate(`/editbook/${id}`);
        // alert(id);
    }
    return (
        <div className="card-book-content">
            <div className="title-books">
                <div className="marquee-box">
                    <marquee direction="right"><h3 className="card-book-title">{title}</h3></marquee>
                </div>
            </div>
            <div className="card-book-decription">
                <h5> <span>Books Written by :</span> <br/>{author}</h5>
                <h5><span>Book is Published by :</span> <br/>{publisher}</h5>
                <h5><span>Book is released on :</span><br/> {release_date}</h5>
                <h5><span>Number of pages :</span> <br/>{pages}</h5>
            </div>
            <div className="book-buttons">

                <button className="edit button" onClick={() => { updateBook(id) }}>Edit</button>
                <button className="delete button " onClick={() => { deletebook(id) }}>Delete</button>
            </div>
        </div>
    )
}

export default Cardbooks