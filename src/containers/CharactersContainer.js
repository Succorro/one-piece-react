import React, { useEffect, useState } from 'react'
import CharactersList from '../components/characters/CharactersList'

const style = {
    width: '1vh',
    height: '1vh',
    display: 'flex',
    padding_bottom: '2.5rem'
    
}

function CharactersContainer() {
    const [characters, setCharacters]= useState([])

    useEffect(()=> {
        fetch('http://localhost:4000/charactersData')
        .then((data) => data.json())
        .then((characters) => setCharacters(characters))
    },[])

  return (
    <div className="characters-list" >
        <h1>Characters!!</h1>
        <CharactersList style= {style} characters={characters}/>
    </div>
  )
}

export default CharactersContainer