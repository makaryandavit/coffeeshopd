import React, { useEffect } from 'react'
import style from "./section5.module.css";
import Aos from 'aos';

const Section5 = () => {

    useEffect(() => {
        Aos.init();
    },[])
  return (
    <section className={style.section}>
        <div className={style.inside}>
            <p className={style.title}>ВЫГОДНАЯ ЦЕНА</p>
            <p className={style.text}>Собственное производство и прямые поставки сырья от надежных производителей создают основу для наших преимущественных цен как в розницу, так и оптом. Наша способность контролировать каждый этап производства и обеспечивать значительные объемы дает нам возможность предлагать вам выгодные тарифы, сочетая исключительное качество с доступностью.</p>
        </div>
    </section>
  )
}

export  {Section5}
