import React, { Components } from 'react';
import './App.css';
import Contact from './Components/Contact/Contact';
import Education from './Components/Education/Education';
import Experience from "./Components/Experience/Experience"
import Home from "./Components/Home/Home"
import Skills from './Components/Skills/Skills';

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
