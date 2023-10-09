import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'
import { NavBar } from '../staticComponents/nav/NavBar'
import { Footer } from '../staticComponents/footer/Footer'
import Card from './HoursCard/HoursCard'
import StoreInfo from './StoreInfo/StoreInfo'
import { BrowserRouter as Router} from 'react-router-dom'
import './OpenHours.css'
import { storesInfo } from './OpenHoursData'

function OpenHours(){

    const [storesCards, _] = useState(storesInfo.map(store => {
        return(<Card 
            storeName= {store.storeName}
            storeID= {store.storeID}
            img= {store.img}
            link= {store.link}
            adress= {store.adress}
            storesOpenHours= {store.storesOpenHours}
            key= {store.storeName} // Byt i framtiden
        />)
    }))

    const [storesPages, __] = useState(storesInfo.map(store => {
        return(<StoreInfo 
            storeName= {store.storeName}
            adress= {store.adress}
            storesOpenHours= {store.storesOpenHours}
            key= {store.storeName}
            link= {store.link}
        />)
    }))

    return(<Router>
            <NavBar />
            <div className="openHours--div">
                <ul className="openHours--card-ul">
                {storesCards.map((store, index) => {
                    return(
                        <li key={index}>
                        {store}
                    </li>
                    )
                })}
                </ul>
                <ul className='openHours--factPage-ul'>
                {storesPages.map((store, index) => {
                    return (
                        <li key={index}>
                            {store}
                        </li>
                    )
                })}
                </ul>
            </div>
            <Footer />    
        </Router>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <OpenHours />
    </React.StrictMode>,
  )