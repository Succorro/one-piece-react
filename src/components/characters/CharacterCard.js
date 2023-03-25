import React from 'react'

function CharacterCard({character}) {
    const {image, name, crew, devilFruit, origin} = character
  return (
    <>
        <img src={image} alt="Character"/>
        <h5>{name}</h5>
        <ul>
            <li>{crew}</li>
            <li>{devilFruit}</li>
            <li>{origin}</li>
        </ul>
    </>

  )
}

export default CharacterCard