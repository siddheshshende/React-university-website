import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import News from './Component/News';
import Contact from './Component/Contact';
import Error from './Component/Error';
import List from './Component/List';
import Footer from './Component/Footer';

const App = () => {
  return (
    <>
    <List />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
