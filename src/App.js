import React from 'react';
// import "~bootstrap/scss/bootstrap";
import './App.scss';
import './assests/main.scss';
import Menu from './components/Menu/menu';
import Header from './components/Header/header'

function App() {
  return (
    <div className="App">
      <Menu/>
      <Header/>
    </div>
  );
}

export default App;
