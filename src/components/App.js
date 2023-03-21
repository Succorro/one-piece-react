import {BrowserRouter, Switch, Route} from "react-router-dom"
import CharactersContainer from '../containers/CharactersContainer';
import About from './About';
import Home from './Home';
import CharacterForm from './characters/CharacterForm';
import Navbar from './navigation/Navbar';
import Header from './navigation/Header';
import Footer from './navigation/Footer';
import CharacterCard from "./characters/CharacterCard";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Header/>
        <Switch>
          <Route exact path="/characters">
            <CharactersContainer/>
          </Route>
          <Route  path="/characters/new">
            <CharacterForm/>
          </Route>
          <Route  path="/characters/:id">
            <CharacterCard/>
          </Route>
          <Route exact path="/about">
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
