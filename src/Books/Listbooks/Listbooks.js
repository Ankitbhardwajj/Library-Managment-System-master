import React from 'react'
import Cardbooks from './Card/Cardbooks'
import './Listbooks.css';


const Listbooks = ({ books, getbooks }) => {
  return (
    <div className="list-card-data">
      {
        books?.map((book, index) => {

          const { id, title, author, publisher, release_date, pages } = book
          return (
            <Cardbooks
              key={id}
              id={id}
              title={title}
              author={author}
              publisher={publisher}
              release_date={release_date}
              pages={pages}
              getbooks={getbooks}
            />
          )
        })
      }
    </div>
  )
}

export default Listbooks