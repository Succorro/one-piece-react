import React, { useEffect, useState } from 'react'
import CharacterFilter from '../components/characters/CharacterFilter'
import CharactersList from '../components/characters/CharactersList'



function CharactersContainer() {
    const [characters, setCharacters]= useState([])
    const [filteredCharacters, setFilteredCharacters] = useState(characters)
    function fetchData() {
        try {
            fetch('http://localhost:4000/charactersData')
            .then(r => r.json())
            .then((data) => 
            setCharacters(data)); setFilteredCharacters(characters)
             
        } catch (error) {
            alert(error)
        }
        
    }
    
    useEffect(()=> {
        fetchData() 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    function handleSearch(searchValue) {
        const filterCharacters = characters.filter((character) =>
            character.name.toLowerCase().includes(searchValue.toLowerCase()))
        setFilteredCharacters(filterCharacters)
    }
    function handleCharacters(characters) {
        setFilteredCharacters(characters)
    }
    useEffect(()=>{
        handleCharacters(characters)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[fetchData])

  return (
    <div className="charactersContainer" >
        <h1>One Piece Characters </h1>
        <CharacterFilter handleSearch={handleSearch}/>
        <CharactersList characters={filteredCharacters}/>
    </div>
  )
}

export default CharactersContainer