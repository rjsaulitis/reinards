import css from "./navbar.module.scss"


export default function Navbar() {
    return (
      <nav id={css.navbar} className="rscont--small pv4 pv3-l">
            <div className={css.brand}>
                <a href="/">R. Saulītis</a>
            </div>
            <div className={css.links}>
                <ul>
                    <li>
                        <a className="pa1 pa3-l db" href="#services">Pakalpojumi</a>
                    </li>
                    <li>
                        <a className="pa1 pa3-l db" href="#projects">Projekti</a>
                    </li>
                    <li>
                        <a className="pt1 pl1 pb1 pa3-l db" href="#footer">Kontakti</a>
                    </li>
                </ul>
            </div>
      </nav>
    )
}
