import React from 'react';
import { Route, Routes } from 'react-router';
import { Home } from './components/home';
import { Activities } from './components/activities';
import { Contributes } from './components/contributes';
import { OngInformation } from './components/ongInformation';
import { NavBar } from './components/navBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route to exact path='/' element={<Home/>}/>
        <Route to path='/nosotros' element={<OngInformation/>}/>
        <Route to path='/actividades' element={<Activities/>}/>
        <Route to path='/contribuye' element={<Contributes/>}/>
      </Routes>
    </div>
  );
}

export default App;
