import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import About from './Components/About'
import Home from './Components/Home'
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

import {
  BrowserRouter,
  Routes,
  Router,
  Navbar,
  Route
} from "react-router-dom";





class App extends Component {
  render() {
  return (

    


    <>

     <Home />
     <About />
     <Skills />
     <Projects />
     <Contact />












    </>

 
  );
}
}

export default App;
