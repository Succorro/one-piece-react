import React from 'react'

function Home() {
  return (
    <div className='homePage'>
        <h1>Welcome!</h1>
        <div className="information">
            <p>This webpage is a react application dedicated to the main characters of my favorite anime.</p>
            <img src='../Images/OnePieceCover.jpg' alt='Straw Hat crew celebrating their reunion in Wano.'/>
            <p>One Piece is an adventure anime, where the Straw Hat pirate crew goes on crazy and interesting adventures. </p>
        </div>
    </div>
  )
}

export default Home