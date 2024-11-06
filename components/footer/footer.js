import css from "./footer.module.scss"
import "animate.css"
import React from "react";
import CTA from '../cta/cta'
import { InlineWidget } from "react-calendly";

export default function Footer() {
    return (
      <footer id="footer" className={css.footer+" flex flex-column justify-center pv5 "}>

      <div className="ph4 ph6-l flex pv4">
        <div className='w-100 flex flex-column items-center justify-center tc'>
            <h2 className="f2 c-white">Want copy that converts?</h2>

            <CTA url="https://calendly.com/rjsaulitis/coffee">Book a Free Call</CTA>
          <div className="pt4">
            <a className="social-links pr2" rel="noopener noreferrer" href="http://instagram.com/rjsaulitis/" title="Instagram"><img title="Instagram" className="social-links-img" src="/images/instagram2.svg"/></a>
            <a className="social-links pr2" rel="noopener noreferrer" href="https://www.linkedin.com/in/rjsaulitis/" title="LinkedIn"><img title="LinkedIn" className="social-links-img" src="/images/linkedin.svg"/></a>
            {/* <a className="social-links pr2" rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=100090777417777" title="Facebook"><img title="Facebook" className="social-links-img" src="/images/facebook2.svg"/></a> */}
          </div>
          <br></br>
          <span className="white">reinardssaulitis@gmail.com</span>
        </div>
      </div>
      {/* <p className="subtitle c-white o-20 tc">Copyright © Reinards Jānis Saulītis {new Date().getFullYear()}</p> */}
      <div className="flex flex-column-reverse flex-row-l ph4">
        <img className='footer-lines-left' src='/images/webp/line1.webp'/>
        <img className='footer-lines-right-top' src='/images/webp/line22.webp'/>
        {/* <img className='footer-lines-right-bottom' src='/images/line3.png'/> */}
        
        <div className="w-50-l">
          
        </div>
        <div className="w-50-l flex o-20 justify-center items-center justify-end-l">
            {/* <a className="subtitle pr2" rel="noopener noreferrer" href="http://instagram.com/rjsaulitis/" title="Instagram">LV  |</a>
            <a className="subtitle pr2" rel="noopener noreferrer" href="http://instagram.com/rjsaulitis/" title="Instagram">EN</a> */}

            {/* <a className="subtitle pr2" rel="noopener noreferrer" href="http://instagram.com/rjsaulitis/" title="Instagram">Instagram</a>
            <a className="subtitle pr2" rel="noopener noreferrer" href="http://tiktok.com/@rjsaulitis" title="TikTok">TikTok</a>
            <a className="subtitle pr2" rel="noopener noreferrer" href="https://www.linkedin.com/in/rjsaulitis/" title="LinkedIn">LinkedIn</a>
            <a className="subtitle pr2" rel="noopener noreferrer" href="http://facebook.com/rjsaulitis/" title="Facebook">Facebook</a> */}
        </div>
      </div>
      
      </footer>
    )
}
