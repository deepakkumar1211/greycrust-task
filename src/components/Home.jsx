import React from 'react'
import Navbar from './Navbar.jsx'
import Hero from './Hero.jsx'
import Pricing from './Pricing.jsx'
import Service from './Service.jsx'

function Home() {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <Pricing/>
            <Service/>
        </div>
    )
}

export default Home