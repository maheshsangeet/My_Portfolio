import React, { components } from 'react';
import './App.css';
import Contact from './components/Contact/Contact';
import Education from './components/Education/Education';
import Experience from "./components/Experience/Experience"
import Home from "./components/Home/Home"
import Skills from './components/Skills/Skills';

import AOS from 'aos';
import 'aos/dist/aos.css';     //scroll library
import { useEffect } from 'react';


function App() {

  useEffect(() => {
    AOS.init({duration : 2000});
  }, []);

  // AOS.init({duration : 2000});                    //can use anyone

  return (
    <div className="App">
      <Home />
      <Experience />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
