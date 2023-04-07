import React from "react"
function CharacterFilter({handleSearch}) {
  return (
    <div className='filterComponent'>
            <input 
            type='text' 
            placeholder='Search Characters...' 
            onChange={e => handleSearch(e.target.value)} />
    </div>
  )
}

export default CharacterFilter