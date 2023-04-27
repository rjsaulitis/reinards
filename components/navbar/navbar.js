import css from "./navbar.module.scss"
import Link from "next/link"


export default function Navbar({float=false}) {

    return (
        <nav id={css.navbar} className={float ? css.float + " flex flex-column flex-row-m flex-row-l" : "flex flex-column flex-row-m flex-row-l"}>
                <div className={"w-100 w-50-m w-50-l"}>
                    <Link className={css.brand} href="/">R. J. Saulītis</Link>
                </div>
                <div className={"w-100 w-50-m w-50-l flex justify-end-m justify-end-l ma0 pa0"}>
                    <a className={css.cta+" f7 f5-m f5-l"} href="mailto:reinardssaulitis@gmail.com" title="Send Email">reinardssaulitis@gmail.com</a>
                </div>
        </nav>
    )

}
