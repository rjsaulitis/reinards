import css from "./headerhome.module.scss"
import Image from 'next/image'
import HeaderImage from '../../public/images/header.jpg'
import 'animate.css';

export default function HeaderHome() {
    return (
      <div className="rscont">
        <div className={css.mobileimg+" animate__animated animate__flipInY"}>
            <Image alt="Robot A.I." src={HeaderImage} objectFit="cover" />
          </div>
        <div className={css.header}>

          <div className={css.left}>
              <div>
                  <h1 className="ma0 pv2 animate__animated animate__jello ">Tavs ceļvedis<br/>zīmolu pasaulē</h1>
                  <p className="ma0 pv2 mb4">Reinards Saulītis - Zīmolu attīstības speciālists</p>
                  <a href="#footer" className={css.cta+" pa2 ph4"}>Sākam Strādāt!</a>
              </div>
          </div>
          <div className={css.right+" animate__animated animate__slideInUp"}>
            <Image alt="Robot A.I." src={HeaderImage} objectFit="cover" />
          </div>
        </div>
      </div>
    )
}
