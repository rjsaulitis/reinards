import css from "./headerhome.module.scss"
import Image from 'next/image'
import HeaderImage from '../../public/images/header.jpg'

export default function HeaderHome() {
    return (
      <div className="rscont">
        <div className={css.mobileimg}>
            <Image src={HeaderImage} objectFit="cover" />
          </div>
        <div className={css.header}>

          <div className={css.left}>
              <div>
                  <h1 className="ma0 pv2">Tavs atbalsts<br/>digitālajā pasaulē</h1>
                  <p className="ma0 pv2 mb4">Reinards Saulītis - Zīmola attīstības speciālists</p>
                  <a href="#footer" className={css.cta+" pa2 ph4"}>Gribu attīstīties</a>
              </div>
          </div>
          <div className={css.right}>
            <Image src={HeaderImage} objectFit="cover" />
          </div>
        </div>
      </div>
    )
}
