import React from 'react';
import './App.css';
/* import {Banner} from './components/Banner';
import Books from './components/Books';
import Modal from './components/Modal' */
import Login from './components/Login'
//import Regform from './components/Regform'
import {Navbar} from './components/Navbar'

function App() {
  /*
  const loadBooks = () => {
    return(
      <div>
        <Banner />
        <Modal />
        <Books />
      </div>
    )
  } */

  return (
    <div className="container-responsive">
      <Navbar />
      <Login />
    </div>
  );
}

export default App;