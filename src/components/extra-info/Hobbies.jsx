import React, { useState } from 'react'
import FadeInOut from '../fade/FadeInOut'

function Hobbies() {
  const [text1, setText1] = useState(false)
  const [text2, setText2] = useState(false)
  const [text3, setText3] = useState(false)
  const [text4, setText4] = useState(false)
  const [text5, setText5] = useState(false)
  const [text6, setText6] = useState(false)
  const [text7, setText7] = useState(false)
  const [text8, setText8] = useState(false)
  const [text9, setText9] = useState(false)

  const handleText1 = () =>{
    setText1(!text1); setText2(false);setText3(false);setText4(false);setText5(false);setText6(false);setText7(false); setText8(false);setText9(false);
  } 
  const handleText2= () =>{
    setText1(false); setText2(!text2);setText3(false);setText4(false);setText5(false);setText6(false);setText7(false); setText8(false);setText9(false);
  } 
  const handleText3 = () =>{
    setText1(false); setText2(false);setText3(!text3);setText4(false);setText5(false);setText6(false);setText7(false); setText8(false);setText9(false);
  } 
  const handleText4 = () =>{
    setText1(false); setText2(false);setText3(false);setText4(!text4);setText5(false);setText6(false);setText7(false); setText8(false);setText9(false);
  } 
  const handleText5 = () =>{
    setText1(false); setText2(false);setText3(false);setText4(false);setText5(!text5);setText6(false);setText7(false); setText8(false);setText9(false);
  } 
  const handleText6 = () =>{
    setText1(false); setText2(false);setText3(false);setText4(false);setText5(false);setText6(!text6);setText7(false); setText8(false);setText9(false);
  } 
  const handleText7 = () =>{
    setText1(false); setText2(false);setText3(false);setText4(false);setText5(false);setText6(false);setText7(!text7);setText8(false);setText9(false);
  } 
  const handleText8 = () =>{
    setText1(false); setText2(false);setText3(false);setText4(false);setText5(false);setText6(false);setText7(false);setText8(!text8);setText9(false);
  } 
  const handleText9 = () =>{
    setText1(false); setText2(false);setText3(false);setText4(false);setText5(false);setText6(false);setText7(false);setText8(false);setText9(!text9);
  } 

  const [text1h, setText1h] = useState(false)
  const [text2h, setText2h] = useState(false)
  const [text3h, setText3h] = useState(false)
  const [text4h, setText4h] = useState(false)
  const [text5h, setText5h] = useState(false)
  const [text6h, setText6h] = useState(false)
  const [text7h, setText7h] = useState(false)
  const [text8h, setText8h] = useState(false)
  const [text9h, setText9h] = useState(false)


  const handleText1hOver = () => {setText1h(true)}
  const handleText1hOut = () => {setText1h(false)}
  const handleText2hOver = () => {setText2h(true)}
  const handleText2hOut = () => {setText2h(false)}
  const handleText3hOver = () => {setText3h(true)}
  const handleText3hOut = () => {setText3h(false)}
  const handleText4hOver = () => {setText4h(true)}
  const handleText4hOut = () => {setText4h(false)}
  const handleText5hOver = () => {setText5h(true)}
  const handleText5hOut = () => {setText5h(false)}
  const handleText6hOver = () => {setText6h(true)}
  const handleText6hOut = () => {setText6h(false)}
  const handleText7hOver = () => {setText7h(true)}
  const handleText7hOut = () => {setText7h(false)}
  const handleText8hOver = () => {setText8h(true)}
  const handleText8hOut = () => {setText8h(false)}
  const handleText9hOver = () => {setText9h(true)}
  const handleText9hOut = () => {setText9h(false)}
  return (
    <div className='pt-5'>
        {text1h && <div className='text-on-hover'>Games</div> }
        {text2h && <div className='text-on-hover'>Riddles</div> }
        {text3h && <div className='text-on-hover'>Cinema</div> }
        {text4h && <div className='text-on-hover'>Travel</div> }
        {text5h && <div className='text-on-hover'>Create</div> }
        {text6h && <div className='text-on-hover'>Family</div> }
        {text7h && <div className='text-on-hover'>Arts</div> }
        {text8h && <div className='text-on-hover'>Martial Arts</div> }
        {text9h && <div className='text-on-hover'>Sports</div> }
        <div className='info-sub-titles'>My hobbies</div>
        <div className='box-shadows'>
            <div className='hobbies-box'>
              <button onMouseOver={handleText2hOver} onMouseOut={handleText2hOut} onClick={handleText2}> <i className={text2? "fa-solid fa-puzzle-piece fa-spin":"fa-solid fa-puzzle-piece"}></i> </button>
              <button onMouseOver={handleText1hOver} onMouseOut={handleText1hOut} onClick={handleText1}> <i className={text1? "fa-solid fa-dice fa-spin":"fa-solid fa-dice"}></i> </button>
              <button onMouseOver={handleText3hOver} onMouseOut={handleText3hOut} onClick={handleText3}> <i className={text3? "fa-solid fa-tv fa-spin":"fa-solid fa-tv"}></i> </button>
              <button onMouseOver={handleText4hOver} onMouseOut={handleText4hOut} onClick={handleText4}> <i className={text4? "fa-solid fa-plane-departure fa-spin":"fa-solid fa-plane-departure"}></i> </button>
              <button onMouseOver={handleText5hOver} onMouseOut={handleText5hOut} onClick={handleText5}> <i className={text5? "fa-solid fa-scroll fa-spin":"fa-solid fa-scroll"}></i> </button>
            </div>
            <div className='hobbies-box'>
              <button onMouseOver={handleText6hOver} onMouseOut={handleText6hOut} onClick={handleText6}> <i className={text6? "fa-solid fa-children fa-spin":"fa-solid fa-children"}></i> </button>
              <button onMouseOver={handleText7hOver} onMouseOut={handleText7hOut} onClick={handleText7}> <i className={text7? "fa-solid fa-masks-theater fa-spin":"fa-solid fa-masks-theater"}></i> </button>
              <button onMouseOver={handleText8hOver} onMouseOut={handleText8hOut} onClick={handleText8}> <i className={text8? "fa-solid fa-user-ninja fa-spin":"fa-solid fa-user-ninja"}></i> </button>
              <button onMouseOver={handleText9hOver} onMouseOut={handleText9hOut} onClick={handleText9}> <i className={text9? "fa-solid fa-volleyball fa-spin":"fa-solid fa-volleyball"}></i> </button>
            </div>
        </div>
        <div className='hobbie-example-text'>
            <FadeInOut show={text1} duration={500}>
                {text1 && 
                    <div>
                        <div> 
                            I started playing Chess and competing when I was just 7 years old. I played all kinds of clasical Board Games <span>(Backgammon, Draughts, Domino, Reversi etc.)</span>
                            and than discovered a new world with modern ones after I moved to Spain at 13. I have a large collection of games <span>(Catan, Jungle Speed, King of Tokyo, Pandemic etc.)</span>, but my biggest
                            and oldest collection is <span> Magic The Gathering </span> 
                        </div>
                        <div>
                          I also co-created non-profit organization called Jumanki in salamanca and organized some events with goverment endorsed fundings. Fun times young life...
                        </div>
                    </div>
                        }
                  
            </FadeInOut>
            <FadeInOut show={text2} duration={500}>
                {text2 &&
                    <div>
                          I was really good at everything related to math when I was young and loved the books my uncle <span> (Math and Science teacher) </span> gave me from time to tame. I participated in Ridle and Problem solving competitions in School and represented
                          my class competing with others. I was not the smartest, but loved thinking outside the box or reordering information and knowledge to figure out a solution. Still love it. Thats why its so fun Programming for me, even if it takes me ages to solve
                          something that already has been unswered online. Some things is better to figure out by yourself if possible and feel that rush of pleasure...
                    </div>}
            </FadeInOut>
            <FadeInOut show={text3} duration={500}>
                {text3 && 
                      <div>
                        <div> 
                            Big fan of every kind of story telling <span>(Books, Movies, Songs, Games etc.)</span> I enjoy Movies and Series for how easy it is to do another
                            things, be still productive and yet enjoy all the job that is behind those productions. 
                        </div>
                        <div>
                            In my list of favorite movies can be found <span>Fight Club, Life Is Beautiful, Interstellar, Good Fellas, 300, Memento, all Jackie Chan movies, 
                            American History X, Snowpiercer, The Raid, The Truman Show, The Chronicles Of Riddick, Edge Of Tomorrow, MCU phases 1-3 A Clockwork Orange</span> among others...  
                        </div>
                        <div>
                            In my list of favorite series can be found <span>Lost, House, Dr Who, Breaking Bad, Better Call Saul, Black Mirror, Dexter, Sherlock, Vikings, Blacklist, The Office, Altered Carbon  </span> among others...  
                        </div>
                        <div>
                          An on the Anime side: <span> Attack on Titans, Hunter X Hunter, Death Note, One Piece, Naruto, Bleach, My Hero Academia, Kuroko No Basket, Baki, Jojos Bizzar Adventures, Fullmetal Alchemist, Vinland Saga, Arcane, Cyberpunk</span>among others... 
                        </div>
                    </div>}
            </FadeInOut>
            <FadeInOut show={text4} duration={500}>
                {text4 && 
                      <div> 
                          World is a big place and even in Spain, where I`ve lived the most, there are still lots of places I havent seen. it's amazing
                          the number of cultures, ideas, traditions, foods, values, landscapes, experiences, etc., that can be discovered by experimenting
                          the world at its best and worst. There are still many places that I have to visit and luckily my partner has the same passion and 
                          ease to move, so who knows where my trip will continue
                      </div>}
            </FadeInOut>
            <FadeInOut show={text5} duration={500}>
                {text5 && 
                      <div>
                          <div>
                            I like to think of myself as the <span>"go to"</span> person, with variety knowledge and resources, combining them to come up with some solution that no one has thought of.
                          </div>
                          <div>
                            I also like to create new board games, write songs, stories, poems, fantasy stories... I enjoy combining ideas and objects, seeing them from a new perspective.
                          </div>
                          <div>
                            Because of all this, programming for me is literally like magic: taking a sequence of numbers and letters to manipulate digital reality.
                          </div>
                      </div>}
            </FadeInOut>
            <FadeInOut show={text6} duration={500}>
                {text6 && 
                        <div> 
                          <div>
                            I grew up in a large family and although I don't have siblings, I never felt alone. Lots of friends and a healthy social life made me who I am, and even though I had many years of loneliness and hardship, it didn't change my desire for sociability.
                          </div>
                          <div>
                          My children have become the greatest joy in my life and all the changes I make in it are for them and my partner, someone who has unconditionally supported me in my career change. I want to keep up with new technologies for them and improve everything possible to give them the life they deserve.
                          </div>
                        </div>}
            </FadeInOut>
            <FadeInOut show={text7} duration={500}>
                {text7 && 
                          <div> 
                            <div>
                              I enjoy big variety of arts and try to create my own. From music and dance to literature and cinema, I try to participate and create my own works. 
                            </div>
                            <div>
                              Luckily, as a child I was stimulated with all kinds of musical instruments, physical expressions and martial arts, so although I have failed in many, I can say that I have tried and I keep trying.
                            </div>
                            <div>
                              I even worked like magician for children from time to time for a non profit organization a long time ago.
                            </div>
                          </div>}
            </FadeInOut>
            <FadeInOut show={text8} duration={500}>
                {text8 && 
                          <div> 
                            <div>
                              My mother always considered that I should know how to defend myself and my loved ones, so she instilled in me a love for martial arts and contact sports.
                              On the other hand, my father always says: instead of learning to fight in 20 years, learn to run in a month and that's it.
                            </div>
                            <div>
                              I trained and taught self defense when I was studying at the university from children to the elderly. My shoulder injury prevented me from competing professionally,
                              but in a martial art like Kung Fu or Muay Thai, competing is a very small part.                            
                            </div>
                            <div>
                            I had the opportunity to put my skills to the test on more than one occasion working as a nightclub bouncer for a while, although solving tense situations with a verbal resolution was much more satisfying
                            </div>
                          </div>
                  }
            </FadeInOut>
            <FadeInOut show={text9} duration={500}>
                {text9 && 
                          <div> 
                            <div>
                              I'm not afraid to play sports that I haven't tried yet and I'm decent at the ones that I have tried. A long list, predominantly volleyball and basketball,
                              but staying in shape is priceless. As always, mens sana in corpore sano, helps to maintain a competitive and healthy mentality, collaborative depending on which sports. 
                            </div>
                            <div>
                              Although it is not necessarily considered a sport, I was a competitor of Latin American and ballroom dance.                        
                            </div>
                          </div>
                  }
            </FadeInOut>
        </div>
    </div>
  )
}

export default Hobbies