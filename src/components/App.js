import {Switch, Route} from "react-router-dom"
import CharactersContainer from "../containers/CharactersContainer";
import About from "./About.js";
import Home from "./Home.js";
import CharacterForm from "./characters/CharacterForm.js";
import Navbar from './navigation/Navbar.js';

import Footer from './navigation/Footer.js';
import CharacterCard from "./characters/CharacterCard.js";
import React from "react";
import './App.css' 

function App() {
  return (
    <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path='/characters'>
              <CharactersContainer/>
            </Route>
            <Route    path='/characters/new'>
              <CharacterForm/>
            </Route>
            <Route path="/characters/:id">
              <CharacterCard/>
            </Route>
            <Route  path='/about'>
              <About/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
      <Footer/>
    </div>
  );
}

export default App;
