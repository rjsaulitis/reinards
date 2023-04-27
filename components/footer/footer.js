import css from "./footer.module.scss"
import "animate.css"
import React from "react";
import { InlineWidget } from "react-calendly";

export default function Footer() {
    return (
      <footer id="footer" className={css.footer+" flex flex-column justify-center pv5"}>

        <div className="flex justify-center pt5 pb4">
          <a title="Follow Reinards Jānis Saulītis on LinkedIn" href="https://www.linkedin.com/in/rjsaulitis/" target="_blank" className={css.socials+" mh2 f5"}>
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
          <a title="Follow Reinards Jānis Saulītis on TikTok" href="https://www.tiktok.com/@rjsaulitis" target="_blank" className={css.socials+" mh2 f5"}>
            <i class="fa-brands fa-tiktok"></i>
          </a>
          <a title="Follow Reinards Jānis Saulītis on Twitter" href="http://twitter.com/rjsaulitis" target="_blank" className={css.socials+" mh2 f5"}>
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a title="Follow Reinards Jānis Saulītis on Facebook" href="http://facebook.com/rjsaulitis" target="_blank" className={css.socials+" mh2 f5"}>
          <i class="fa-brands fa-facebook-f"></i>
          </a>
        </div>

        <p className="flex justify-center pb4 ma0">
          <span>Let's make magic happen!</span>
        </p>
        
        <InlineWidget url="https://calendly.com/rjsaulitis/strategijas-sesija" />

        {/* <div className="rscont flex flex-column pv2 pv4-l">
          <div className="flex flex-column justify-center items-center pv6">
            <h2 className="tc mb0">Ar ko varu Tev palīdzēt?</h2>
            <p className="tc mt2 mb4 w-80 w-100-l">Aizpildi formu un ar Tevi sazināšos 24h laikā!</p>
            <a className={css.cta+" tc b pv3 animate__animated animate__jello"} href="https://forms.gle/qY9EZNgobf9Mws5s6" target="_blank">Pieteikt Projektu</a>
          </div>
          <div className="flex flex-row justify-space-between">
            <div className="flex w-50 flex-column justify-end items-start">
            </div>
          </div>
        </div> */}
      </footer>
    )
}
