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
        <CharactersList characters={characters}></CharactersList>
    </>
  )
}

export default CharactersContainer