import React from 'react'

function CharacterCard({character}) {
    const {image, name, crew, devilFruit, origin} = character
    const style = {
        listStyle: 'none'
    }
  return (
    <>
        <img src={image} alt="Character"/>
        <h5>{name}</h5>
        <ul style={style}>
            <li>Pirate Crew: {crew}</li>
            {devilFruit ? `Devil Fruit: ${devilFruit}` : null}
            <li>Origin: {origin}</li>
        </ul>
    </>

  )
}

export default CharacterCard