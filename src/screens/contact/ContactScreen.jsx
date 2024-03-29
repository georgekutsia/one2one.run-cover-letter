import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Hobbies, Projects, Skills } from '../../components'


function ContactScreen() {
  const [skill, setSkills] = useState(false)
  const [project, setProject] = useState(false)
  const [hobbies, setHobbies] = useState(false)

  useEffect(() => {
  const skillTime = setTimeout(() => {
      setSkills(true)
    }, 1900)

  const projectTime = setTimeout(() => {
      setProject(true)
    }, 1400)

  const hobbiesTime = setTimeout(() => {
      setHobbies(true)
    }, 900)
    return () => {
      clearTimeout(skillTime)
      clearTimeout(projectTime)
      clearTimeout(hobbiesTime)
  }
}, [])
  return (
    <div className='mt-5 mb-3'>
      <div className='little-more-title'>Little more about me...</div>
      <article className='little-more-text'>My curiosity and desire to learn a little about everything, to try and experience life at its best and worst, has led me 
      to live a very changing and challenging life. Everything is reflected in my past jobs, hobbies, travels and my way of spending my free time, 
      but a few years ago I decided to settle down, have a family and also improve in every way. Although I didn't know it, my passion for programming had started 
      in my first math class at school, and now I can finally enjoy combining my hobby and work.</article>

      <article className='little-more-text'>Whatever I did or do, my values and morals prevale, and they are paramount for me: 
      Loyalty, Dedication, Creativity, Curiosity, Companionship, Honesty, Empathy  <span>(too much sometimes)</span>, generosity... and if you don't like this list,
       I have another: Courage, Sence of Humor, Determination, Toughness, Leadership, Trustworthiness, Resolvability. </article>

      <article className='little-more-text'>  I have worked at Red Cross, trying to make a world a little bit a better place; I have taught all kinds of students 
      how to defend themselves and be safe when needed; I've dedicated all my energy and free time to a company to blossom and become a household name in new places;
       Donated so much money, time, blood and platelets just hoping it helps somebody; Worked like a bouncer, being polite and respectful unless it was inevitable,
        trying to find the best solutions for each situation; I walked through countless businesses trying to get them as clients, learning techniques and tactics 
        from the best sellers; I tried to transmit the best values ​​that I have to children in camps and make their childhood as happy as mine</article>
      <article className='little-more-text'>If interested in more information, frontpage has all the links you need to find me.</article>
      <article className='little-more-text'>Thanks for reading.</article>
      {/* <MyInfo/> */}
      {/* <WorkExperience/> */}
      {hobbies && 
          <Hobbies/>
      }
      {/* {project && 
          <Projects/>
      } */}
      {skill && 
          <Skills/>
      }
      <Link className='button-link my-btn  btn-more-info' to="/">Back to frontpage</Link>
    </div>
  )
}

export default ContactScreen