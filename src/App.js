import React from 'react';
import { Route, Routes } from 'react-router';
import { Home } from './components/home';
import { OngInformation } from './components/ongInformation';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route to exact path='/' element={<Home/>}/>
        <Route to path='/news' element={<OngInformation/>}/>
      </Routes>
    </div>
  );
}

export default App;
