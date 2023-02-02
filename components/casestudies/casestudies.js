import css from "./casestudies.module.scss"
import Image from 'next/image'
import "animate.css"

import Vdc from "../../public/images/mockups/vdc.jpg"
import Lmg from "../../public/images/mockups/lmg.jpg"
import Realdeal from "../../public/images/mockups/realdeal/a4-brochure.jpg"
import Chalete from "../../public/images/mockups/chalete.jpg"

export default function CaseStudies({preview}) {

    if(preview){
        return (
            <div id="projects" className="">
    
            {/* Start */}
            <div className="flex flex-column flex-row-l flex-wrap">
                <div className={css.study}>
                    <div className={css.img}>
                        <Image alt="Project Photo" src={Realdeal} objectFit="cover" />
                    </div>
                    <div className={css.details}>
                        <h2>RealDeal</h2>
                        <a href="/portfolio/realdeal" className="hollow-link--white">Skatīt Projektu</a>
                    </div>
                </div>
                <div className={css.study}>
                    <div className={css.img}>
                        <Image alt="Project Photo" src={Vdc} objectFit="cover" />
                    </div>
                    <div className={css.details}>
                        <h2>VDC</h2>
                        <a href="/portfolio/vdc" className="hollow-link--white">Skatīt Projektu</a>
                    </div>
                </div>
                <div className={css.study}>
                    <div className={css.img}>
                        <Image alt="Project Photo" src={Lmg} objectFit="cover" />
                    </div>
                    <div className={css.details}>
                        <h2>LM Group Buve</h2>
                        <a href="/portfolio/lmg" className="hollow-link--white">Skatīt Projektu</a>
                    </div>
                </div>
                <div className={css.viewmore}>
                    <div className={css.cta_wrap+" flex flex-column"}>
                        <h3>Skatīt visus projektus</h3>
                        <a className={css.cta+" pa3 ph4"} href="/portfolio">Portfolio</a>
                    </div>
                </div>
            </div>
            {/* End */}
            
          </div>
        )
    }else{
        return (
            <div id="projects" className="">
    
    
            {/* Start */}
            <div className="flex flex-column flex-row-l flex-wrap">
                <div className={css.study}>
                    <div className={css.img}>
                        <Image alt="Project Photo" src={Realdeal} objectFit="cover" />
                    </div>
                    <div className={css.details}>
                        <h2>RealDeal</h2>
                        <a href="/portfolio/realdeal" className="hollow-link--white">Skatīt Projektu</a>
                    </div>
                </div>
                <div className={css.study}>
                    <div className={css.img}>
                        <Image alt="Project Photo" src={Vdc} objectFit="cover" />
                    </div>
                    <div className={css.details}>
                        <h2>VDC</h2>
                        <a href="/portfolio/vdc" className="hollow-link--white">Skatīt Projektu</a>
                    </div>
                </div>
                <div className={css.study}>
                    <div className={css.img}>
                        <Image alt="Project Photo" src={Lmg} objectFit="cover" />
                    </div>
                    <div className={css.details}>
                        <h2>LM Group Buve</h2>
                        <a href="/portfolio/lmg" className="hollow-link--white">Skatīt Projektu</a>
                    </div>
                </div>
                <div className={css.study}>
                    <div className={css.img}>
                        <Image alt="Project Photo" src={Chalete} objectFit="cover" />
                    </div>
                    <div className={css.details}>
                        <h2>Chalete</h2>
                        <a href="/portfolio/chalete" className="hollow-link--white">Skatīt Projektu</a>
                    </div>
                </div>
            </div>
            {/* End */}
            
          </div>
        )
    }
}
