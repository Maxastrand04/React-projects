import React from "react";
import ReactDOM from 'react-dom/client'
import { Nav } from '../staticComponents/nav/NavBar'
import { Footer } from '../staticComponents/footer/Footer'
import './Home.css'

function Home(){

    return(<>
            <Nav/>
            <div className="home">
                <img className="home--main-img" src="https://static.wixstatic.com/media/e78bfb_08793ca317b04effbf20e8dc90af5109~mv2.jpg/v1/fill/w_1903,h_1255,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/e78bfb_08793ca317b04effbf20e8dc90af5109~mv2.jpg" alt="" />
            </div>
            <Footer />    
        </>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Home />
    </React.StrictMode>,
  )