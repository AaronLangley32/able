import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/homePage';
import About from './components/aboutPage';
import Contact from './components/contactPage';
import Error from './components/404';
import Navbar from './components/navbar';
import Photo from './components/photoPage';
import Footer from './components/footer';


function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/photo' element={<Photo />} />
          <Route path='/*' element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
