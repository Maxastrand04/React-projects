import React, {useState, useEffect} from 'react'
import CustomButton from './navButtons/CustomButton';
import './NavBar.css'

const buttonsArray = [
    {
        text: "meny",
        link: "https://order.openpos.tech/vallentunastenugnsbageri/"
    },
    {
        text: "öppettider",
        link: "../openHours.html"
    },
    {
        text: "butiker",
        link: "../stores.html"
    },
    {
        text: "fika/tårta",
        link: "../test.html"
    },
    {
        text: "gelato",
        link: "../test.html"
    },
    {
        text: "om oss",
        link: "../test.html"
    },
    {
        text: "kontakt",
        link: "../test.html"
    },
    {
        text: "jobb",
        link: "../test.html"
    }
]

export function NavBar(){
    const [scrolling, setScrolling] = useState(false);
    const [navButtons, setNavButtons] = useState( buttonsArray.map((customButton, index) => {

        return(<CustomButton 
            content= {customButton? customButton.text : false}
            img= {customButton.img}
            specClass='nav-button'
            link= {customButton.link}
            key={index}
        />)
    }))

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
        <div className={`nav ${scrolling ? 'scrolling' : ''}`}>
            <ul className='nav-buttons--ul'>
                <li className='nav--logo-li'>
                    <a href="../index.html">
                        <img className="nav--logo" src="https://static.wixstatic.com/media/e78bfb_3e28898191f54ca8ab28ed0ec938e6ad~mv2.png/v1/fill/w_142,h_143,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logotyp%20Vit.png"></img>
                    </a>
                </li>
                {navButtons.map((button, index) => {
                    return(
                        <li key={index} className='nav-buttons--li'>
                            {button}
                        </li>
                    )
                })}    
            </ul>
        </div>
    )
}
//            <img className="nav--white-cafe" src="https://static.wixstatic.com/media/90f36d_da0fb1d55c0b4995b3ca9fa5c392a67b~mv2.jpg/v1/fill/w_76,h_90,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/WGC17_Rekommenderad_300dpi.jpg" alt="" />
