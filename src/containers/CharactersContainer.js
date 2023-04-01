import React, { useEffect, useState } from 'react'
import CharacterFilter from '../components/characters/CharacterFilter'
import CharactersList from '../components/characters/CharactersList'



function CharactersContainer() {
    const [characters, setCharacters]= useState([])
    const fetchData = () => {
        try {
            fetch('http://localhost:4000/charactersData')
            .then((data) => data.json())
            .then((characters) => setCharacters(characters))
        } catch (error) {
            alert(error)
        }
    }
    
    useEffect(()=> {
        fetchData()
    },[])

  return (
    <div className="charactersContainer" style={{margin: '0 5vw', width: "90vw", display: "grid", border: "1px solid black"}} >
        <h1>Characters!!</h1>
        <CharacterFilter/>
        <CharactersList characters={characters}/>
    </div>
  )
}

export default CharactersContainer