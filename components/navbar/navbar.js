import css from "./navbar.module.scss"


export default function Navbar() {
    return (
      <nav className="rscont pv3">
            <div className={css.brand}>
                <a href="/">R. Saulītis</a>
            </div>
            <div className={css.links}>
                <ul>
                    <li>
                        <a className="ph3 pv3 db" href="#services">Pakalpojumi</a>
                    </li>
                    <li>
                        <a className="ph3 pv3 db" href="#projects">Projekti</a>
                    </li>
                    <li>
                        <a className="ph3 pv3 db" href="#footer">Kontakti</a>
                    </li>
                </ul>
            </div>
            <div className={css.cta}>
                <a href="bezmakasas">reinardssaulitis@gmail.com</a>
            </div>
      </nav>
    )
}
