import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Addbooks from './Addbooks/Addbooks'
import Booksdata from './Booksdata'
import Editbooks from './Editbooks/Editbooks'
import Nav from './Nav/Nav'
import Services from './Services/Services'

const Routing = () => {
  return (
    <div className="routing">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Booksdata />} />
          <Route path="/addbook" element={<Addbooks />} />
          <Route path="/editbook/:id" element={<Editbooks />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Routing