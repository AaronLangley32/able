import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/homePage';
import About from './components/aboutPage';
import Contact from './components/contactPage';
import Error from './components/404';
import Navbar from './components/navbar';


function App() {
  return (
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/*' element={<Error />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
