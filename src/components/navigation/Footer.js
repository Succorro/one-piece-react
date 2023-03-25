import React from 'react'
import { SocialIcon } from 'react-social-icons'

function Footer() {
  return (
    <div>
        <div className='row'>
            <div className='col-6'>
                <h4>Steven Gutierrez</h4>
            </div>
            <div className='col-6'>
                <SocialIcon url='https://twitter.com/Stevogtz'/>
                <SocialIcon url='https://www.linkedin.com/in/sgutierrez-/'/>
                <SocialIcon url='https://github.com/Succorro'/>
            </div>
        </div>
    </div>
  )
}

export default Footer