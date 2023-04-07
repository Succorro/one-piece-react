import {Switch, Route} from "react-router-dom"
import CharactersContainer from "../containers/CharactersContainer";
import CharacterForm from "./characters/CharacterForm.js";
import About from "./About.js";
import Home from "./Home.js";
import Navbar from './navigation/Navbar.js';
import Footer from './navigation/Footer.js';
import React, {useState, useEffect} from "react";
import './App.css' 

function App() {
  const [characters, setCharacters]= useState([])
  function fetchData() {
    try {
        fetch('http://localhost:4000/charactersData')
        .then(r => r.json())
        .then((data) => 
        setCharacters(data));  
         
    } catch (error) {
        alert(error)
    }  
}
useEffect(()=> {
    fetchData()
// eslint-disable-next-line react-hooks/exhaustive-deps
},[])

  function onAddCharacter(newCharacter){
    console.log(newCharacter)
    setCharacters((prevArray)=>[...prevArray, newCharacter])
  }
  return (
    <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path='/characters'>
              <CharactersContainer characters={characters}/>
            </Route>
            <Route    path='/characters/new'>
              <CharacterForm onAddCharacter={onAddCharacter}/>
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
