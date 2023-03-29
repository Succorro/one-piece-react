import React from 'react'

function CharacterCard({character}) {
    const {alt, image, name, crew, devilFruit, origin} = character
  return (
    <div style={{width: '100%', border: '1px solid black'}}>
        <img style={{width: '100px', maxHeight: '100px', objectFit: 'contain'}} src={image} alt={alt}/>
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