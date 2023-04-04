import React from 'react'

function CharacterCard({character}) {
    const {image, name, crew, devilFruit, origin} = character
  return (
    <div className= "characterCard">
        <img src={image} alt={`${name} of the ${crew}`}/>
        <h5>{name}</h5>
        <ul>
            <li>Pirate Crew: {crew}</li>
            {devilFruit ? `Devil Fruit: ${devilFruit}` : null}
            <li>Origin: {origin}</li>
        </ul>
    </div>

  )
}

export default CharacterCard