import React from 'react'
import { Nav } from './staticComponents/nav/NavBar'
import { Home } from './homePage/Home'
import { Footer } from './staticComponents/footer/Footer'
export default function App(){
    return(
        <div className='App'>
            <Nav />
            <Home /> 
            <Footer />
        </div>
    )
}