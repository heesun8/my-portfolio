import logo from './logo.svg';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar2, Footer } from './components';
import { Header, Projects, Contact, About } from './container';
import './App.css';


const App = () =>{
  return (
    <div className="App">
    <Navbar2 />
    <Header />
    <About />
    <Projects />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;
