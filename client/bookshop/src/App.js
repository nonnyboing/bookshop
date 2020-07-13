import React from 'react';
import './App.css';
/* import {Banner} from './components/Banner';
import Books from './components/Books';
import Modal from './components/Modal'
import Login from './components/Login' */
import Regform from './components/Regform'

function App() {
  /*
  const loadBooks = () => {
    return(
      <div>
        <Navbar />
        <Modal />
        <Books />
      </div>
    )
  } */

  return (
    <div className="container">
      <Regform />
    </div>
  );
}

export default App;