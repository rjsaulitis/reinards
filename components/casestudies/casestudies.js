import css from "./casestudies.module.scss"
import Image from 'next/image'
import "animate.css"


import Lmg from "../../public/images/lmg-th.webp"
import Vdc from "../../public/images/vdc-th.webp"
import Chalete from "../../public/images/chalete-th.webp"
import Alaise from "../../public/images/alaise-th.webp"
import AlutuMedus from "../../public/images/alutu-th.webp"
import Fencepro from "../../public/images/fencepro-th.webp"

import Thumbnail from "./thumbnail";

export default function CaseStudies() {

    return (
        <div className={css.portfolio_container}>

            

            <div id="portfolio" className="flex justify-between flex-wrap ph2-l mh2-l">
                <Thumbnail url="lmg" photo={Lmg} title="Lmg"/>
                <Thumbnail url="fencepro" photo={Fencepro} title="Fencepro" />
                <Thumbnail url="chalete" photo={Chalete} title="Chalete" />
                <Thumbnail url="alutu_medus" photo={AlutuMedus} title="Alutu Medus" />
                <Thumbnail url="alaise" photo={Alaise} title="Alaise" />
                <Thumbnail url="vdc" photo={Vdc} title="VDC" last />
            </div>
        </div>
    )
}
