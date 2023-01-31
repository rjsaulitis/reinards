import css from "./header.module.scss"
import Image from 'next/image'
import 'animate.css';

export default function Header({children, cover, title, cta}) {

  if(cta) {
    return (
      <>
        <div className={css.background}>
          <Image alt="Project Photo" src={"/../public/images/headers/"+cover} width="1920" height="1080" object-fit="cover" />
        </div>
        <div className={css.tint}>
            <h1 className="f1 mb4 tc animate__animated animate__slideInUp">{title}</h1>
            {/* <p className="mt3 mb4">Lorem ipsum dolor sitamet amoris gamoris</p> */}
            <a href={cta} target="_blank" className="hollow-link--white animate__animated animate__slideInUp animate__slow">Pieteikt Projektu</a>
        </div>
      </>
    )

  }else {
    return (
      <>
        <div className={css.background}>
          <Image alt="Project Photo" src={"/../public/images/headers/"+cover} width="1920" height="1080" object-fit="cover"  />
        </div>
        <div className={css.tint}>
            <h1 className="f0 ma0 animate__animated animate__fadeInUp animate__slow">{title}</h1>
        </div>
      </>
    )
  }

}
