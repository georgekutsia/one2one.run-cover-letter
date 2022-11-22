import React from 'react'
import Skill from '../skills/Skill'

function Skills() {
  return (
    <div >
        <div className='info-sub-titles mt-5'>Some Skills</div>
        <div className='box-shadows'>
              <div className='hobbies-box'>
                  <Skill name={"HTML"} image={"https://res.cloudinary.com/dfrda73uc/image/upload/v1668898723/donGions%20imgs/Skills/pngwing.com_-_2022-11-19T193638.736_ndpvkf.png"} link={"https://developer.mozilla.org/es/docs/Web/HTML"} />
                  <Skill name={"CSS"} image={"https://res.cloudinary.com/dfrda73uc/image/upload/v1668898717/donGions%20imgs/Skills/pngwing.com_-_2022-11-19T235806.932_hdyall.png"} link={"https://developer.mozilla.org/es/docs/Web/CSS"} />
                  <Skill name={"JavaScript"} image={"https://res.cloudinary.com/dfrda73uc/image/upload/v1668898716/donGions%20imgs/Skills/pngwing.com_-_2022-11-19T235821.072_ljeegm.png"} link={"https://developer.mozilla.org/es/docs/Web/JavaScript"} />
                  <Skill name={"Node.JS"} image={"https://res.cloudinary.com/dfrda73uc/image/upload/v1668883758/donGions%20imgs/Skills/node.js_ihwsl6.png"} link={"https://nodejs.org/en/"}/>
                  <Skill name={"React.JS"} image={"https://res.cloudinary.com/dfrda73uc/image/upload/v1668883763/donGions%20imgs/Skills/pngwing.com_-_2022-11-19T193140.057_twnf3l.png"} link={"https://es.reactjs.org/"} />
                  <Skill name={"Express.JS"} image={"https://res.cloudinary.com/dfrda73uc/image/upload/v1668883758/donGions%20imgs/Skills/express_js_batz5x.png"} link={"https://expressjs.com/es/"} />
                  <Skill name={"MongoDB"} image={"https://res.cloudinary.com/dfrda73uc/image/upload/v1668883758/donGions%20imgs/Skills/pngwing.com_-_2022-11-19T192612.003_qn9mjy.png"} link={"https://es.wikipedia.org/wiki/MongoDB"} />
              </div>
              <div className='hobbies-box'>
                  <Skill name={"MongoDB Atlas"} image={"https://res.cloudinary.com/dfrda73uc/image/upload/v1668892524/donGions%20imgs/Skills/atlass_fdhxt3.png"} link={"https://www.mongodb.com/atlas/database"} />
                  <Skill name={"Cloudinary"} image={"https://res.cloudinary.com/dfrda73uc/image/upload/v1668883763/donGions%20imgs/Skills/pngwing.com_-_2022-11-19T193116.563_lwmzxd.png"} link={"https://cloudinary.com/"} />
                  <Skill name={"Bcrypt"} image={"https://res.cloudinary.com/dfrda73uc/image/upload/v1668883758/donGions%20imgs/Skills/bcrypt_yboycd.png"} link={"https://www.npmjs.com/package/bcrypt"} />
                  <Skill name={"Bootstrap"} image={"https://res.cloudinary.com/dfrda73uc/image/upload/v1668883763/donGions%20imgs/Skills/pngwing.com_-_2022-11-19T193157.974_ed0ikt.png"} link={"https://getbootstrap.com/"} />
                  <Skill name={"Font Awesome"} image={"https://res.cloudinary.com/dfrda73uc/image/upload/v1668883758/donGions%20imgs/Skills/font_jn7kly.png"} link={"https://fontawesome.com/"} />
                  <Skill name={"Handlebars"} image={"https://res.cloudinary.com/dfrda73uc/image/upload/v1668893272/donGions%20imgs/Skills/pngwing.com_-_2022-11-19T222739.120_lndxju.png"} link={"https://handlebarsjs.com/"} />
                  <Skill name={"Axios"} image={"https://res.cloudinary.com/dfrda73uc/image/upload/v1668883758/donGions%20imgs/Skills/Axios__computer_library__logo.svg_vxccsi.png"} link={"https://www.npmjs.com/package/axios"} />
              </div>
              <div className='hobbies-box'>
              </div>
              <div className='hobbies-box'>
                  <Skill name={"DaVinci Resolve"} image={"https://res.cloudinary.com/dfrda73uc/image/upload/v1668892736/donGions%20imgs/Skills/pngwing.com_-_2022-11-19T221024.963_fz67bm.png"} link={"https://www.blackmagicdesign.com/es/products/davinciresolve"} />
                  <Skill name={"GIMP"} image={"https://res.cloudinary.com/dfrda73uc/image/upload/v1668892809/donGions%20imgs/Skills/pngwing.com_-_2022-11-19T221119.340_awixxo.png"} link={"https://www.gimp.org/downloads/"} />
                  <Skill name={"Adobe Premiere"} image={"https://res.cloudinary.com/dfrda73uc/image/upload/v1668892828/donGions%20imgs/Skills/pngwing.com_-_2022-11-19T221054.606_jp14jv.png"} link={"https://www.adobe.com/es/products/premiere.html"} />
                  <Skill name={"Magic Set Editor"} image={"https://res.cloudinary.com/dfrda73uc/image/upload/v1668896076/donGions%20imgs/Skills/mse_si9bum.png"} link={"https://magicseteditor.sourceforge.net/"} />
              </div>
        </div>
    </div>
  )
}

export default Skills