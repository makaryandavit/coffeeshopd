import React, { useEffect } from 'react'
import style from "./section1.module.css";
import Btn1Text from "../../assets/btn1Text.svg"
import Btn2Text from "../../assets/btn2Text.svg"
import AOS from 'aos';
import 'aos/dist/aos.css';
// import { boxesInfo } from '../../coffessInfo';

const Section1 = ({boxesInfo}) => {

    useEffect(() => {
        AOS.init()
    },[])
  return (
    <section className={style.section} id='products'>
      {
        boxesInfo.map(item => (
            <div className={style.box} key={item.idBox} data-aos={item.aosStyle}>
                <div className={style.boxImg}>
                    <img src={item.img} className={style.img} alt="" />
                </div>
                <div className={style.boxInfo}>
                    <p className={style.title}>{item.title}</p>
                    <p className={style.reTitle}>{item.reTitle}</p>
                    <p className={style.text}>{item.text}</p>
                    <div className={style.btns}>
                        <div className={style.btn1}>
                            <a href={item.link1}>
                                <img src={Btn1Text} className={style.btn1Text} alt="" />
                            </a>
                        </div>
                        <div className={style.btn2}>
                            <a href={item.link2}>
                                <img src={Btn2Text} className={style.btn2Text} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        ))
      }
    </section>
  )
}

export  {Section1}
