import React from 'react'

function ContactInfo({contactData, faIcon, outLink, faIconLink}) {
  return (
    <div className='contact-info-frontpage'> 
        <div><i className={` ${faIcon}`}></i></div>
        <div>{contactData}</div>
        <a href={outLink}><i className={` ${faIconLink}`}></i></a>
    </div>
  )
}

export default ContactInfo