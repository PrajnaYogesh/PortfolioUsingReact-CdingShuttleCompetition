import React from 'react'
import { AiOutlineGithub , AiOutlineLinkedin} from 'react-icons/ai';


import './Footer.css'
function Footer() {
  return (
    <div className='footerstyle'>
        <a className='parastyle' target="_blank" href='https://github.com/Praj-04'>GitHub <AiOutlineGithub /></a>
        <a className='parastyle' target="_blank" href='https://www.linkedin.com/in/prajna-yogesh-8334945b/'>Linkedin < AiOutlineLinkedin /> </a>
        
    </div>
  )
}

export default Footer