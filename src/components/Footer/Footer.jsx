import React from 'react';
import './Footer.css'
import { SlSocialTwitter, SlSocialVkontakte } from "react-icons/sl"
import { PiTelegramLogo } from "react-icons/pi";

const Footer = () => {
    return (
        <div className='footerBox'>
            <div className='footerContent'>

                <div>
                    LOGO STA-Travel
                </div>
                
                <div className='overall'>
                    <div>Контакты</div>
                    <div>Забронировать</div>
                    <div>Горящие туры</div>
                </div>

                <div className='overall'>
                    <div>tel: 8800-55-35-35</div>
                    <div>email: example@mail.com</div>
                    <div>chto-to escho</div>
                    <div>all rights reserved (c)</div>
                </div>
                <div className='socials'>
                    <SlSocialTwitter></SlSocialTwitter>
                    <SlSocialVkontakte></SlSocialVkontakte>
                    <PiTelegramLogo></PiTelegramLogo>
                </div>
            </div>
        </div>
    );
};

export default Footer;