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
    <>
        <h1>Characters!!</h1>
        <CharactersList characters={characters}/>
    </>
  )
}

export default CharactersContainer