import css from "./footer.module.scss"


export default function Footer() {
    return (
      <footer id="footer" className={css.footer+" ma0 pa3 pv6 flex flex-column"}>
          <h2 className="tc mb4">Esi gatavs pārmaiņām?</h2>
          <a className="tc b pv2" href="mailto: reinardssaulitis@gmail.com">reinardssaulitis@gmail.com</a>
          <div className="flex justify-center mt5 hidden">
            <div className="flex flex-column mh3">
              <span>Vizuālā identitāte</span>
              <span>Fotogrāfijas</span>
              <span>WEB Izstrāde</span>
            </div>
            <div className="flex flex-column mh3">
              <span>SEO</span>
              <span>A/B testi</span>
              <span>Analītika</span>
            </div>
            <div className="flex flex-column mh3">
              <span>Copywriting</span>
              <span>Audio Apstrāde</span>
              <span>Merchandise</span>
            </div>
            <div className="flex flex-column mh3">
              <span>Sociālie tīkli</span>
              <span>Google business</span>
              <span>Re-brendings</span>
            </div>
          </div>
      </footer>
    )
}
