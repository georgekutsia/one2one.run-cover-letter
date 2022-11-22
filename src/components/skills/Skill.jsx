import React from 'react'
import { Link } from 'react-router-dom'

function Skill({image, name, link}) {
  return (
    <div>
    
        <div className='skills-little-box mb-4'>
        <a href={link} ><img  className='image-skills' src={image} alt="Techno" /></a>
          <div className='text-skills'>{name}</div>
        </div>
    </div>
  )
}

export default Skill