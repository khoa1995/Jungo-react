import React from 'react';
import './App.scss';
import './assests/main.scss';
import '../node_modules/pattern.css';
// import Navigation from './views/Navigation';
import Main from './views/Main';

function App() {
  return (
    <div className="App pattern-triangles-md yellow-dark bg-yellow-80 vh-100">
      <Main/>
    </div>
  );
}

export default App;
