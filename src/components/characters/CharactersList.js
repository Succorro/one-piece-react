import React from 'react'
import CharacterCard from './CharacterCard'


function CharactersList({characters}) {
    const displayCharacters = characters.map((character) => {
        <CharacterCard key={character.id} character={character} />
    })
  return (
    <>
        <div>{displayCharacters}</div>
    </>
  )
}

export default CharactersList