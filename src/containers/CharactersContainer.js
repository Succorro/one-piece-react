import React, {useState } from 'react'
import CharacterFilter from '../components/characters/CharacterFilter'
import CharactersList from '../components/characters/CharactersList'



function CharactersContainer({characters}) {
    const[search, setSearch] = useState('')
    const filterCharacters = characters.filter((character) =>
            character.name.toLowerCase().includes(search.toLowerCase()))
  return (
    <div className="charactersContainer" >
        <h1>One Piece Characters </h1>
        <CharacterFilter search={search} setSearch={setSearch}/>
        <CharactersList characters={filterCharacters}/>
    </div>
  )
}

export default CharactersContainer