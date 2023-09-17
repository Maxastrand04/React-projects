import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'
import { Nav } from '../staticComponents/nav/NavBar'
import { Footer } from '../staticComponents/footer/Footer'
import Card from './card/Card'
import UnderLine from './underLine'
import './openHours.css'

const currentDate = new Date()
const weekDaysOpenHours = [
    {c: "07:00 - 20:00", sc: "08:00 - 19:00", fs: "08:00 - 18:00"},
    {c: "07:00 - 21:00", sc: "08:00 - 19:00", fs: "08:00 - 18:00"},
    {c: "08:00 - 21:00", sc: "09:00 - 17:00", fs: "09:00 - 16:00"},
    {c: "08:00 - 20:00", sc: "10:00 - 17:00", fs: "09:00 - 16:00"},
]

const storesInfo = [
    {
        storeName: "Bageriet",
        img: "https://www.panea.se/wp-content/uploads/2021/04/Vallentuna-Stenungsbageri2.jpg", // Lägg in en bildlänk här 
        link: "section--bageriet",
        text: "AlléVägen 6A"
    },
    {
        storeName: "SportsClub",
        img: "https://lisuna.se/onewebstatic/ae2d179b50-DSC_0254.jpg", 
        link: "section--sc",
        text: "test"
    },
    {
        storeName: "Färgskrapan",
        img: "https://mb.cision.com/Public/10372/3454975/b7ad29ab6b6198e1_800x800ar.jpg", 
        link: "section--fs",
        text: "test"
    }
]

function OpenHours(){

    const dayOfWeek = currentDate.getDay()

    const [storesComponent, _] = useState(storesInfo.map(store => {
        return(<Card 
            storeName= {store.storeName}
            img= {store.img}
            link= {store.link}
            text= {`${store.text} `}        // FIXA DENNA RAD
            key= {store.storeName} // Byt i framtiden
        />)
    }))

    return(<>
            <Nav/>
            <div className="openHours--div">
                <ul className="openHours--card-ul">
                {storesComponent.map((store, index) => {
                    return(
                        <li key={index}>
                        {store}
                    </li>
                    )
                })}
                </ul>
            </div>
            <Footer />    
        </>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <OpenHours />
    </React.StrictMode>,
  )