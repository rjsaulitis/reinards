import css from "./casestudies.module.scss"
import Image from 'next/image'
import "animate.css"

import Vdc from "../../public/images/mockups/vdc/vdc.jpg"
import Lmg from "../../public/images/mockups/lmg/lmg.jpg"
import Realdeal from "../../public/images/mockups/realdeal/a4-brochure.jpg"
import Chalete from "../../public/images/mockups/chalete/chalete.jpg"
import Alaise from "../../public/images/mockups/alaise/alaise.jpg"
import Rosaella from "../../public/images/mockups/rosaella/desktop.jpg"

import Thumbnail from "./thumbnail";

export default function CaseStudies() {

    return (
        <div className={css.portfolio_container}>
            <div id="portfolio" className="flex justify-between flex-wrap">
                <Thumbnail url="alaise" photo={Alaise} title="Alaise" />
                <Thumbnail url="vdc" photo={Vdc} title="Vdc" />
                <Thumbnail url="lmg" photo={Lmg} title="Lmg" />
                <Thumbnail url="chalete" photo={Chalete} title="Chalete" />
                <Thumbnail url="realdeal" photo={Realdeal} title="Realdeal" />
                <Thumbnail url="rosaella" photo={Rosaella} title="Rosaella" />
            </div>
        </div>
    )
}
