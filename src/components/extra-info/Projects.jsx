import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Dongions from '../projects/Dongions'
import IronLearning from '../projects/IronLearning'
import Karengedon from '../projects/Karengedon'
import FadeInOut from '../fade/FadeInOut'

function Projects() {
  const [project1, setProject1] = useState(false)
  const [project2, setProject2] = useState(false)
  const [project3, setProject3] = useState(false)

    const handleProject1 = () =>{
      setProject1(!project1);setProject2(false);setProject3(false);
    }
    const handleProject2 = () =>{
      setProject1(false);setProject2(!project2);setProject3(false);
    }
    const handleProject3 = () =>{
      setProject1(false);setProject2(false);setProject3(!project3);
    }

  return (
    <div>
        <div className='info-sub-titles mt-5'>Few Projects</div>
        <div className='box-shadows'>
            <div className='projects-box '>
                <div>
                    <Link onClick={handleProject1}><img src="https://res.cloudinary.com/dfrda73uc/image/upload/v1668768772/donGions%20imgs/kisspng-bible-psalms-book-of-nehemiah-magic-books-5a8e7c5aab8528.7528172415192873867026_ns0hm4.png" alt="Iron-learning"/></Link>
                    <div>Iron-Learning</div>
                </div>
                <div>
                    <Link onClick={handleProject2}><img src="https://res.cloudinary.com/dfrda73uc/image/upload/v1668768795/donGions%20imgs/karenn_scng2d.png" alt="Karengedón"/></Link>
                    <div>Karengedón</div>
                </div>
                <div>
                    <Link onClick={handleProject3}><img src="https://res.cloudinary.com/dfrda73uc/image/upload/v1668769269/donGions%20imgs/pngwing.com_39_ybbdgf.png" alt="Dongions"/></Link>
                    <div>DonGions</div>
                </div>
                  {/* <img src="" alt="" width="100px"/>
                  <img src="" alt="" width="100px"/>
                  <img src="" alt="" width="100px"/>
                  <img src="" alt="" width="100px"/>
                  <img src="" alt="" width="100px"/> */}
            </div>
            <div align="center">
              <FadeInOut show={project1} duration={300}>
                {project1 && <IronLearning/>}
              </FadeInOut>
              <FadeInOut show={project2} duration={300}>
                {project2 && <Karengedon/>}
              </FadeInOut>
              <FadeInOut show={project3} duration={300}>
                {project3 && <Dongions/>}
              </FadeInOut>
            </div>
        </div>
    </div>
  )
}

export default Projects