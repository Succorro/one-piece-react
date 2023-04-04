import React from 'react'
import CharacterCard from './CharacterCard'


function CharactersList({characters}) {
    console.log(characters)
    const displayCharacters = characters.map((character) => {
        return(
        <CharacterCard key={character.id} character={character} />
    )})
  return (
        <div className='characterDisplay'>
                {displayCharacters}
            </div>
  )
}

export default CharactersList