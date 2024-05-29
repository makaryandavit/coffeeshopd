import React, { useState } from 'react'
import style from "./header.module.css";

import Logo from "../../assets/logo.svg"

const Header = () => {
const [fix, setFix] = useState(false);

    if(window.innerWidth < 600){
        window.onscroll = function (){
            if(window.scrollY > 100){
                setFix(true)
            }else{
                setFix(false);
            }
        }
    }

  return (
    <div className={style.header} id='header'>
        <div className={fix ? `${style.navigation} ${style.navFix}` : style.navigation} >
            <div className={style.naviagateLeft}>
                <img src={Logo} className={style.logo} alt="" onClick={() => {
                    window.location.href = ''
                }} />
            </div>
            <div className={style.naviagateRight}>
                <ul className={style.lists}>
                    <li>
                        <a href="#header" className={`${style.link1} ${style.link}`}>Главная</a>
                    </li>
                    <li>
                        <a href="#products" className={`${style.link2} ${style.link}`}>Наш товар</a>
                    </li>
                    <li>
                        <a href="#prais" className={`${style.link3} ${style.link}`}>Получить прайс</a>
                    </li>
                </ul>
            </div>
        </div>
        <div className={style.btn}>
            <a href="">Получить оптовый прайс</a>
        </div>
    </div>
  )
}

export { Header }
