
// import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import CharactersContainer from '../containers/CharactersContainer';
import About from './About';
import Home from './Home';
import CharacterForm from './characters/CharacterForm';
import Navbar from './navigation/Navbar';
import Header from './navigation/Header';
import Footer from './navigation/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Header/>
        <Switch>
          <Route exact path="/characters">
            <CharactersContainer/>
          </Route>
          <Route  path="/characters/new">
            <CharacterForm/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
