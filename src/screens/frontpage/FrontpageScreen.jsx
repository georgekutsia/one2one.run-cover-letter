
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {ContactInfo, CoverLetterEnglish, CoverLetterSpanish, PdfEnglish, PdfSpanish, WhoAmI} from '../../components'

function FrontpageScreen() {
  const [english, setEnglish] = useState(true)
  const [spanish, setSpanish] = useState(false)
  const handleEnglish = () => {
    setEnglish(true)
    setSpanish(false)
  }
  const handleSpanish = () => {
    setEnglish(false)
    setSpanish(true)
  }

  return (
    <div className='background-all'>
      <div className=''>
        <Link onClick={handleEnglish} className={english? "" : "opacity"}><img src="https://res.cloudinary.com/dfrda73uc/image/upload/v1668763879/donGions%20imgs/pngwing.com_-_2022-11-18T103105.288_ekuzee.png" alt="English" /></Link>
        <Link onClick={handleSpanish} className={english? "opacity" : ""}><img src="https://res.cloudinary.com/dfrda73uc/image/upload/v1668763879/donGions%20imgs/pngwing.com_-_2022-11-18T103046.054_tug3ll.png" alt="Español" /></Link>
      </div>
      <div className='top-info'>
      {/* cambiar de idioma el título y nombre ->  */}
          {english &&            
                    <WhoAmI name={"George Kutsia Andguladze"} title={"Junior Web Developer"} 
                      studies={"MERN stack (Mongo.db, Express.js, React.js and Node.js)"}/> }
          {spanish &&            
                    <WhoAmI name={"George Kutsia Andguladze"} title={"Desarrollador Web Junior"} 
                      studies={"Tecnologías MERN (Mongo.db, Express.js, React.js y Node.js)"}/> }
          {/* cambiar de idioma el título y nombre <--  */}
          <div>
            <ContactInfo faIcon={"fa-solid fa-mobile-screen"} contactData={"+34 601-10-52-62"}/>
            <ContactInfo faIcon={"fa-solid fa-at"} contactData={"georgekutsia@gmail.com"}/>
            {/* cambiar de idioma la ubicación  ->  */}
            {english &&
                <ContactInfo faIcon={"fa-solid fa-location-dot"} contactData={"Barcelona, Spain"}/>}
            {spanish &&
                <ContactInfo faIcon={"fa-solid fa-location-dot"} contactData={"Barcelona, España"}/>}
            {/* cambiar de idioma la ubicación  <--  */}
            <div className='d-flex'>
              <ContactInfo faIconLink={"fa-brands fa-linkedin"} outLink={"https://www.linkedin.com/in/george-kutsia-570a5bb6/"}/>
              <ContactInfo faIconLink={"fa-brands fa-github"} outLink={"https://github.com/georgekutsia"}/>
              <ContactInfo faIconLink={"fa-brands fa-codepen"} outLink={"https://codepen.io/Paithan"}/>
              <ContactInfo faIconLink={"fa-brands fa-free-code-camp"} outLink={"https://www.codewars.com/users/georgekutsia"}/>
            </div>
          </div>
      </div>
      <div>
          {english && <CoverLetterEnglish /> }
          {spanish &&  <CoverLetterSpanish />}
      </div>
      <div> 
            { english && 
            <PdfEnglish/>
            }
            {spanish &&
              <PdfSpanish/>
            }
      </div>
      { english && 
      <Link className='button-link my-btn btn-more-info' to="/contact">More about me</Link> }
      { spanish && 
      <Link className='button-link my-btn btn-more-info' to="/contact">More about me</Link>
      }
    </div>
  )
}

export default FrontpageScreen