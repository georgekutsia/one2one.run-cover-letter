import React from 'react'

function WhoAmI({name, title, studies}) {
  return (
    <div className='name-title'>
        <div className='name'>{name}</div>
        <div className='title'>{title}</div>
        <div className='studies'>{studies}</div>
    </div>
  )
}

export default WhoAmI