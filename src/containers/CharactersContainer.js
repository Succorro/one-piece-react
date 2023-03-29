import React, { useEffect, useState } from 'react'
import CharactersList from '../components/characters/CharactersList'



function CharactersContainer() {
    const [characters, setCharacters]= useState([])

    useEffect(()=> {
        fetch('http://localhost:4000/charactersData')
        .then((data) => data.json())
        .then((characters) => setCharacters(characters))
    },[])

  return (
    <div className="charactersContainer" style={{width: "fit-content", display: "inline-block", border: "1px solid black"}} >
        <h1>Characters!!</h1>
        <CharactersList characters={characters}/>
    </div>
  )
}

export default CharactersContainer