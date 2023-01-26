import css from "./footer.module.scss"
import "animate.css"

export default function Footer() {
    return (
      <footer id="footer" className={css.footer}>
        <div className="rscont flex flex-column pv2 pv4-l">
          <div className="flex flex-column pv5">
            <h2 className="tc mb4">Negaidi Rītdienu <br/> SĀC TAGAD!</h2>
            <a className={css.cta+" tc b pv3 animate__animated animate__jello"} href="mailto: reinardssaulitis@gmail.com">Pieteikt Projektu</a>
          </div>
          <div className="flex flex-row justify-space-between">
            <div className="flex w-50 flex-column items-start">
              <span>Rīga, Latvija</span>
              <span>reinardssaulitis@gmail.com</span>
              <span>©2023. All Rights Reserved.</span>
            </div>

            <div className="flex w-50 justify-end items-end">
              <div className="flex flex-column items-end flex-row-large">
                <a title="Follow Reinards Saulītis on LinkedIn" href="https://www.linkedin.com/in/reinards-saulitis/" target="_blank" className={css.socials}>LinkedIn</a>
                <a title="Follow Reinards Saulītis on TikTok" href="https://www.tiktok.com/@reinardssaulitis" target="_blank" className={css.socials}>TikTok</a>
                <a title="Follow Reinards Saulītis on Facebook" href="https://www.facebook.com/reinardsjanissaulitis/" target="_blank" className={css.socials}>Facebook</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
}
