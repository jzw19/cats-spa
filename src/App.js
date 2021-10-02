import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/gallery/:breed' component={Gallery} />
      </BrowserRouter>
    </div>
  );
};

export default App;
