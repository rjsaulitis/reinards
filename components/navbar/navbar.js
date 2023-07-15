import css from "./navbar.module.scss"
import Link from "next/link"


export default function Navbar({float=false}) {

    return (
        <>
            <nav id={css.navbar} className={float ? css.float + " flex flex-column flex-row-m flex-row-l" : "flex flex-column flex-row-m flex-row-l"}>
                    <div className={"w-100 w-50-m w-50-l"}>
                        <Link className={css.brand} title="Sākums" href="/"><img src="/images/icon.svg"></img></Link>
                    </div>
                    <div className={"w-100 w-50-m w-50-l flex justify-end-m justify-end-l ma0 pa0"}>
                        <a className={css.cta+" f7 f5-m f5-l"} href="https://calendly.com/rjsaulitis/strategijas-sesija" title="Zīmola attīstības sesija" target="_blank">Bezmaksas stratēģija</a>
                    </div>
            </nav>
            <div className={css.navspace}></div>
        </>
    )

}
