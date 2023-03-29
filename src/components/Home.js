import React from 'react'

function Home() {
  return (
    <div className='homePage' style={{}}>
        <h1>Welcome!</h1>
        <div className="information" style={{display: 'flex', fontFamily: 'sans-serif', fontSize: '25px'}}>
            <p>This React application</p>
            <img style={{width: '50vw', height: '50vh', objectFit: 'contain', }}src='../Images/OnePieceCover.jpg' alt='Straw Hat crew celebrating their reunion in Wano.'/>
            <p>The story of One Piece</p>
        </div>
    </div>
  )
}

export default Home