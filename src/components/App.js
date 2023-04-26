import { Switch, Route } from "react-router-dom";
import CharactersContainer from "../containers/CharactersContainer";
import CharacterForm from "./characters/CharacterForm.js";
import About from "./About.js";
import Home from "./Home.js";
import Navbar from "./navigation/Navbar.js";
import Footer from "./navigation/Footer.js";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    try {
      fetch("http://localhost:4000/charactersData")
        .then((r) => r.json())
        .then((data) => setCharacters(data));
    } catch (error) {
      alert(error);
    }
  }, []);

  function onAddCharacter(newCharacter) {
    setCharacters((prevArray) => [...prevArray, newCharacter]);
  }
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/characters/new">
          <CharacterForm onAddCharacter={onAddCharacter} />
        </Route>
        <Route path="/characters">
          <CharactersContainer characters={characters} />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
