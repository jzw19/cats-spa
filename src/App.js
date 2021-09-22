import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import About from './components/About/About';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
      </BrowserRouter>
    </div>
  );
}

export default App;
