import React from "react";
import './App.css';
import Home from './pages/Home';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className='container'>
      <NavBar />
      <hr />
      <Home/>
    </div>
  )

}

export default App;
