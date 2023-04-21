import React, { useState, useEffect } from 'react'
import Listbooks from './Listbooks/Listbooks';
import axios from 'axios'
import './Booksdata.css';
import Addbooks from './Addbooks/Addbooks';
import { url } from '../resource';

const Booksdata = () => {
  const [books, setbooks] = useState([]);

  const getbooks = async () => {
    try {
      const data = await axios.get(url);
      setbooks(data.data);
      // console.log(data.data)
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getbooks();
  }, [])
  return (
    <div className="outer-book-container">

      <div className="Books-data-outer-box">
        <Listbooks getbooks={getbooks} books={books} />
        {/* <Addbooks getbooks={getbooks} books={books} setbooks={set}/> */}
      </div>

    </div>
  )
}

export default Booksdata