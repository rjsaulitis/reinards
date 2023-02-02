import css from "./navbar.module.scss"


export default function Navbar() {
    return (
      <nav id={css.navbar} className="ph3 ph6-l pv4 pv5-l">
            <div className={css.brand}>
                <a href="/">R. Saulītis</a>
            </div>
            <div className={css.links}>
                <ul>
                    <li>
                        <a className="pa1 pa3-l db" href="/">Sākums</a>
                    </li>
                    <li>
                        <a className="pa1 pa3-l db" href="/portfolio">Portfolio</a>
                    </li>
                    {/* <li>
                        <a className="pa1 pa3-l db" href="#services">Blogs</a>
                    </li> */}
                    <li>
                        <a className="pt1 pl1 pb1 pa3-l db" href="#footer">Kontakti</a>
                    </li>
                </ul>
            </div>
      </nav>
    )
}
