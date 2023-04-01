import React from 'react'
import CharacterCard from './CharacterCard'


function CharactersList({characters}) {
    console.log(characters)
    const displayCharacters = characters.map((character) => {
        return(
        <CharacterCard key={character.id} character={character} />
    )})
  return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            width: "100%", 
            height: "100%", 
            border: '1px solid black'}}>
                {displayCharacters}
            </div>
  )
}

export default CharactersList