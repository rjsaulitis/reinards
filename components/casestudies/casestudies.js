import css from "./casestudies.module.scss"
import Image from 'next/image'

import Vdc from "../../public/images/mockups/vdc.png"
import Lmg from "../../public/images/mockups/lmg.png"

export default function CaseStudies() {
    return (
        <div id="projects">
        <h2 className={css.studytitle+" pv4 mt4-l mb5-l"}></h2>
        <div className="flex flex-column flex-row-l">
            <div className={css.study}>
                <div className={css.lmg}>
                    <Image src={Lmg} objectFit="cover" />
                </div>
                {/* <h3>LM Group Buve</h3> */}
            </div>
            <div className={css.study}>
                <div className={css.vdc}>
                    <Image src={Vdc} objectFit="cover" />
                </div>
                {/* <h3>VDC</h3> */}
            </div>
        </div>
      </div>
    )
}
