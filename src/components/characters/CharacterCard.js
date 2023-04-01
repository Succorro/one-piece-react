import React from 'react'

function CharacterCard({character}) {
    const {image, name, crew, devilFruit, origin} = character
  return (
    <div className= "character-card" 
        style={{
            width: '33%', 
            flexGrow: 1,
            border: '1px solid black'}}>
        <img style={{paddingTop: '10px', width: '100px', maxHeight: '100px', objectFit: 'contain'}} src={image} alt={`${name} of the ${crew}`}/>
        <h5>{name}</h5>
        <ul style={{listStyle: 'none', textAlign: 'left'}}>
            <li>Pirate Crew: {crew}</li>
            {devilFruit ? `Devil Fruit: ${devilFruit}` : null}
            <li>Origin: {origin}</li>
        </ul>
    </div>

  )
}

export default CharacterCard