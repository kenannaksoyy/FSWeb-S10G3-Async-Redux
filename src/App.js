import React from 'react';
import './App.css';
import Header from './comps/Header';
import {Route} from "react-router-dom";
import HomePage from './comps/HomePage';
import Boreds from './comps/Boreds';
import Dogs from './comps/Dogs';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="route-cont">
      <Route path="/" exact><HomePage/></Route>
      <Route path="/bored"><Boreds/></Route>
      <Route path="/dog"><Dogs/></Route>
      </div>
    </div>

  );
}

export default App;