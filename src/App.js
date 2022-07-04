import React, {useEffect, useState} from 'react';
import { Routes, Route, Navigate } from "react-router-dom";

import Header from './components/Header';
import Banner from './components/Banner';

import Languages from './components/Languages';
import MoreAboutLanguages from './components/MoreAboutLanguages';

import Proyects from './components/Proyects';
// import AllProyects from './components/AllProyects';
import SingleProyect from './components/SingleProyect';

import Footer from './components/Footer';

function App() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ')
  }
  
  return (
    <>
      <div className="fixed bottom-2 right-2 z-10">
        <button
          type="button"
          onClick={scrollToTop}
          className={classNames(
            isVisible ? 'opacity-100' : 'opacity-0',
            'inline-flex items-center rounded-full bg-stone-600 p-3 text-white shadow-sm transition-opacity hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-offset-2',
          )}
        >
          <i className='icon solid fa fa-arrow-up-long'></i>
        </button>
      </div>

        <Header />
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/portfolio" replace />}
          />  
          <Route path="/portfolio" element={
            <>
              <Banner />
              <Languages />
              <Proyects />
              <Footer />
            </>
          } />

          <Route path="/languages" element={
            <>
              <MoreAboutLanguages />
              <Footer />
            </>
          } />

          <Route path="/proyects-and-work" element={
            <>
              <Proyects />
              <Footer />
            </>
          } />
          
          <Route path="/:proyectName" element={
            <>
              <SingleProyect />
              <br />
              <br />
              <br />
              <br />
              <Footer />
            </>
          } />

          <Route path="/contact" element={
            <>
              <Footer />
            </>
          } />
        </Routes>
    </>
  );
}

export default App;
