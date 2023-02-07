import css from "./footer.module.scss"
import "animate.css"

export default function Footer() {
    return (
      <footer id="footer" className={css.footer}>
        <div className="rscont flex flex-column pv2 pv4-l">
          <div className="flex flex-column justify-center items-center pv6">
            <h2 className="tc mb0">Ar ko varu Tev palīdzēt?</h2>
            <p className="tc mt2 mb4 w-80 w-100-l">Aizpildi formu un ar Tevi sazināšos 24h laikā!</p>
            <a className={css.cta+" tc b pv3 animate__animated animate__jello"} href="https://forms.gle/qY9EZNgobf9Mws5s6" target="_blank">Pieteikt Projektu</a>
          </div>
          <div className="flex flex-row justify-space-between">
            <div className="flex w-50 flex-column justify-end items-start">
              <span>Rīga, Latvija</span>
              <a href="mailto:reinardssaulitis@gmail.com">reinardssaulitis@gmail.com</a>
              <span>©2023. All Rights Reserved.</span>
            </div>

            <div className="flex w-50 justify-end items-end">
              <div className="flex flex-column items-end flex-row-large">
                <a title="Follow Reinards Jānis Saulītis on LinkedIn" href="https://www.linkedin.com/in/rjsaulitis/" target="_blank" className={css.socials}>LinkedIn</a>
                <a title="Follow Reinards Jānis Saulītis on TikTok" href="https://www.tiktok.com/@rjsaulitis" target="_blank" className={css.socials}>TikTok</a>
                <a title="Follow Reinards Jānis Saulītis on Twitter" href="http://twitter.com/rjsaulitis" target="_blank" className={css.socials}>Twitter</a>
                <a title="Follow Reinards Jānis Saulītis on Facebook" href="http://facebook.com/rjsaulitis" target="_blank" className={css.socials}>Facebook</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
}
