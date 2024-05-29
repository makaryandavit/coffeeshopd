import React from 'react'
import style from "./footer.module.css";
import Logo from "../../assets/logo.svg"


const Footer = () => {
  return (
    <footer>
       <img src={Logo} alt="" className={style.logo} />
    </footer>
  )
}

export {Footer}
