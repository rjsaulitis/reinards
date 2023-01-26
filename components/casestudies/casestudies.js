import css from "./casestudies.module.scss"
import Image from 'next/image'
import "animate.css"

import Vdc from "../../public/images/mockups/vdc.jpg"
import Lmg from "../../public/images/mockups/lmg.jpg"
import Realdeal from "../../public/images/mockups/realdeal.jpg"
import Chalete from "../../public/images/mockups/chalete.jpg"

export default function CaseStudies() {
    return (
        <div id="projects" className="pa2 pa4-l pt3 pb0 mt5-l">


        {/* Start */}
        <div className="flex flex-column flex-row-l justify-between mb4-l">
            <div className={css.study}>
                <div className={css.img}>
                    <Image alt="Project Photo" src={Realdeal} objectFit="cover" />
                </div>
            </div>
            <div className={css.study}>
                <div className={css.img}>
                    <Image alt="Project Photo" src={Vdc} objectFit="cover" />
                </div>
            </div>
        </div>
        {/* End */}

        {/* Start */}
        <div className="flex flex-column flex-row-l justify-between mb4-l">
            <div className={css.study}>
                <div className={css.img}>
                    <Image alt="Project Photo" src={Lmg} objectFit="cover" />
                </div>
            </div>
            <div className={css.study}>
                <div className={css.img}>
                    <Image alt="Project Photo" src={Chalete} objectFit="cover" />
                </div>
            </div>
        </div>
        {/* End */}

        
      </div>
    )
}
