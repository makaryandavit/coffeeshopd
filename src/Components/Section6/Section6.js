import React, { useEffect, useRef, useState } from 'react'
import style from "./section6.module.css";

import VideoImage from "../../assets/video.png"
import Play from "../../assets/play.svg"

import Video from "../../assets/video/coffee.mp4"

import AOS from 'aos';
import 'aos/dist/aos.css';

const Section6 = () => {
    useEffect(() => {
        AOS.init()
    },[])
    const [play, setPlay] = useState(false);
    const video = useRef(null)

    useEffect(() => {
        if(play){
            video.current.play()
        }else{
            video.current.pause()
        }
    },[play])

  return (
    <section className={style.section}>
        <div className={style.videoContainer} data-aos='zoom-in'>
            <div className={play ? style.playNone : style.play}>
                <img src={Play} className={style.playVideo} onClick={() => setPlay(true)} alt="" />
            </div>
            <video ref={video} src={Video} poster={VideoImage} onClick={() => {
                setPlay(false)
            }}></video>
        </div>
    </section>
  )
}

export  {Section6}
