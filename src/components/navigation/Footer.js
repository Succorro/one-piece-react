import React from 'react'
import { SocialIcon } from 'react-social-icons'

function Footer() {
  return (
    <div className='row' style={{height: '2.5rem', display: 'flex',width: '100%', bottom: '0', position: 'absolute' }}>
        <div className='col-6' style={{width: '50%'}}>
            <h4>Steven Gutierrez</h4>
        </div>
        <div className='col-6' style={{width: '50%'}}>
            <SocialIcon url='https://twitter.com/Stevogtz' style={{width: '1.5em', margin: '.2em', padding: '.2em'}}/>
            <SocialIcon url='https://www.linkedin.com/in/sgutierrez-/' style={{width: '1.5em', margin: '.2em', padding: '.2em'}}/>
            <SocialIcon url='https://github.com/Succorro' style={{width: '1.5em', margin: '.2em', padding: '.2em'}}/>
        </div>
    </div>
  )
}

export default Footer