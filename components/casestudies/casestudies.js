import css from "./casestudies.module.scss"
import Image from 'next/image'
import "animate.css"

import Vdc from "../../public/images/mockups/vdc.png"
import Lmg from "../../public/images/mockups/lmg.png"
import Realdeal from "../../public/images/mockups/realdeal.png"
import Chalete from "../../public/images/mockups/chalete.png"

export default function CaseStudies() {
    return (
        <div id="projects" className="pa4 pt3 pb0 mt5">


        {/* Start */}
        <div className="flex flex-column flex-row-l justify-between mb4-l">
            <div className={css.study}>
                <div className={css.img}>
                    <Image src={Realdeal} objectFit="cover" />
                </div>
            </div>
            <div className={css.study}>
                <div className={css.img}>
                    <Image src={Vdc} objectFit="cover" />
                </div>
            </div>
        </div>
        {/* End */}

        {/* Start */}
        <div className="flex flex-column flex-row-l justify-between mb4-l">
            <div className={css.study}>
                <div className={css.img}>
                    <Image src={Lmg} objectFit="cover" />
                </div>
            </div>
            <div className={css.study}>
                <div className={css.img}>
                    <Image src={Chalete} objectFit="cover" />
                </div>
            </div>
        </div>
        {/* End */}

        
      </div>
    )
}
