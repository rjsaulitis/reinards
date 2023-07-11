import css from "./casestudies.module.scss"
import Image from 'next/image'
import "animate.css"

import Vdc from "../../public/images/mockups/vdc/vdc.webp"
import Lmg from "../../public/images/mockups/lmg/lmg.webp"
import Realdeal from "../../public/images/mockups/realdeal/a4-brochure.webp"
import Chalete from "../../public/images/mockups/chalete/chalete.webp"
import Alaise from "../../public/images/mockups/alaise/alaise.webp"
import AlutuMedus from "../../public/images/mockups/alutumedus/header.webp"
import Fencepro from "../../public/images/mockups/fencepro/header.webp"

import Thumbnail from "./thumbnail";

export default function CaseStudies() {

    return (
        <div className={css.portfolio_container}>

            

            <div id="portfolio" className="flex justify-between flex-wrap">
                <Thumbnail url="alaise" photo={Alaise} title="Alaise" />
                <Thumbnail url="vdc" photo={Vdc} title="Vdc" />
                <Thumbnail url="lmg" photo={Lmg} title="Lmg" full/>
                <Thumbnail url="fencepro" photo={Fencepro} title="Fencepro" />
                <Thumbnail url="chalete" photo={Chalete} title="Chalete" />
                <Thumbnail url="alutumedus" photo={AlutuMedus} title="Alutu Medus" full/>
            </div>
        </div>
    )
}
