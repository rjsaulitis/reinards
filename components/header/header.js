import css from "./header.module.scss"
import Image from 'next/image'
import 'animate.css';

import LandingImg from "../../public/images/headers/home.jpg"

export default function Header({children, cover, title, subtitle, cta, link}) {

  if(cta) {
    return (
      <>
        <div className={css.background}>
          <Image alt="Project Photo" src={"/images/headers/"+cover} width="1920" height="1080" object-fit="cover" />
        </div>
        <div className={css.tint}>
            <h1 className="w-90 w-100-l f1-l mb0 tc animate__animated animate__fadeInDown ">{title}</h1>
            <p className="w-90 w-100-l tc mt3 mb4 animate__animated animate__fadeInUp animate__slow">{subtitle}</p>
            <a href={link} target="_blank" className="hollow-link--white animate__animated animate__fadeInUp animate__slow">{cta}</a>
        </div>
        <div className={css.arrow+""}>↓</div>
      </>
    )

  }else {
    return (
      <>
        <div className={css.background}>
          <Image alt="Project Photo" src={"/images/headers/"+cover} width="1920" height="1080" object-fit="cover"  />
        </div>
        <div className={css.tint}>
            <h1 className="f0 ma0 animate__animated animate__fadeInUp animate__slow">{title}</h1>
        </div>
        <div className={css.arrow}>↓</div>
      </>
    )
  }

}
