import React from 'react';
import ReactDOM from 'react-dom/client';
import { NavBar } from '../staticComponents/nav/NavBar';
import { Footer } from '../staticComponents/footer/Footer';
import './Stores.css'

function Stores(){
    
    return(
        <>
        <NavBar />

        <Footer />
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Stores />
    </React.StrictMode>,
  )