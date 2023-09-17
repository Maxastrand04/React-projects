import React from "react";
import './Footer.css'

export function Footer(){
    return(
        <footer className="footer">
            <h1>vallentuna</h1>
            <h1>stenugnsbageri</h1>
            <div className="img-links">
                <a href="https://www.instagram.com/vallentunastenugnsbageri/?hl=af">
                    <img src="https://static.wixstatic.com/media/8d6893330740455c96d218258a458aa4.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8d6893330740455c96d218258a458aa4.png" alt="" />
                </a>
                <a href="https://www.facebook.com/Vallentuna-Stenugnsbageri-103987148215957/">
                    <img src="https://static.wixstatic.com/media/e316f544f9094143b9eac01f1f19e697.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e316f544f9094143b9eac01f1f19e697.png" alt="" />
                </a>

            </div>
            <h3>©2023 skapad utav <a href="https://www.google.com/webhp?hl=sv&sa=X&ved=0ahUKEwif7vuGpaWBAxXXSfEDHWImCNMQPAgJ">Max Åstrand</a></h3>
        </footer>
    )
}