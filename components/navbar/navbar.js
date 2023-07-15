import css from "./navbar.module.scss"
import Link from "next/link"


export default function Navbar({float=false}) {

    return (
        <>
            <nav id={css.navbar} className={float ? css.float + " flex flex-column flex-row-m flex-row-l" : "flex flex-column flex-row-m flex-row-l"}>
                    <div className={"w-100 ph3 ph4-l mh3 pt4 pt0-l"}>
                        <Link className={css.brand} title="Sākums" href="/"><img src="/images/icon.svg"></img></Link>
                    </div>
            </nav>
        </>
    )

}
