import React from 'react';
import './App.scss';
import './assests/main.scss';
import Navigation from './views/Navigation';
import Main from './views/Main';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Main/>
    </div>
  );
}

export default App;
