import React from 'react'
import style from "./section7.module.css";

const Section7 = () => {
  return (
    <section className={style.section} id='prais'>
      <div className={style.inside}>
        <div className={style.top}>
            <p className={style.title}>ПОЛУЧИ <span className={style.specialText}>ОПТОВЫЙ ПРАЙС</span> ПРЯМО СЕЙЧАС!</p>
        </div>
        <div className={style.bottom}>
            <div className={style.left}>
                <p className={style.head}>ПРЕДЛОЖЕНИЕ  ДЛЯ КОРПОРАТИВНЫХ  КЛИЕНТОВ</p>
                <p className={style.text}>Индивидуальные условия!  Для бизнеса, для офисов,  ресторанов, кофеен, отелей </p>
            </div>
            <div className={style.right}>
                <form>
                    <input type="text" className={style.inputs} placeholder='ИМЯ' />
                    <input type="email" className={style.inputs} placeholder='E-MAIL' />
                    <input type="tel" className={style.inputs} placeholder='ТЕЛЕФОН' />
                    <input type="submit" className={style.btn} value='получить оптовый прайс' />
                </form>
            </div>
        </div>
      </div>
    </section>
  )
}

export  {Section7}
