// import React from 'react'
// import "./Hero.css"

// function Hero() {
//   return (
//     <div className='hero' id='home'>
//         <div>
//             <div id='hero-pic'>
//                 <img
//                     src="/assets/22.png"
//                     alt="Hero1"
//                     className="hero-img"
//                 />
//             </div>
//         </div>

//         <div className='hero-sec-2'>
//             <div className='hero-sec2-1'>
//                 <h1>Let's Explore The World with Us</h1>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione veniam perferendis illum vitae ipsa aut vero fugit. </p>
//                 <button className='learn-more-btn'>Learn More</button>
//             </div>
//             <div className='hero-sec2-2'>
//                 <div>
//                     <img src="/assets/19.png" alt="" />
//                 </div>
//                 <div>
//                     <img src="/assets/20.png" alt="" />
//                 </div>
//                 <div>
//                     <img src="/assets/21.png" alt="" />
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Hero






import React from 'react'
import "./Hero.css"

function Hero() {
  return (
    <div className='hero' id='home'>
        <div className='hero-pic' >
            <img src="/assets/22.png" alt="Hero1" className="hero-img" />
        </div>

        <div className='hero-sec-2'>
            <div className='hero-sec2-1'>
                <h1>Let's Explore The World with Us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione veniam perferendis illum vitae ipsa aut vero fugit.</p>
                <button className='learn-more-btn'>Learn More</button>
            </div>
            
            <div className='hero-sec2-2'>
                <div><img src="/assets/19.png" alt="img1" /></div>
                <div><img src="/assets/20.png" alt="img2" /></div>
                <div><img src="/assets/21.png" alt="img3" /></div>
            </div>
        </div>
    </div>
  )
}

export default Hero;
