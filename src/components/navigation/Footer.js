import React from 'react'
import { SocialIcon } from 'react-social-icons'

function Footer() {
  return (
    <div className='row'>
        <div className='col-6'>
            <h4>Steven Gutierrez</h4>
        </div>
        <div className='col-6'>
            <SocialIcon url='https://twitter.com/Stevogtz' style={{width: '3.1em', margin: '0 2em', padding: '.2em'}}/>
            <SocialIcon url='https://www.linkedin.com/in/sgutierrez-/' style={{width: '3.1em', margin: '0 2em', padding: '.2em'}}/>
            <SocialIcon url='https://github.com/Succorro' style={{width: '3.1em', margin: '0 2em', padding: '.2em'}}/>
        </div>
    </div>
  )
}

export default Footer