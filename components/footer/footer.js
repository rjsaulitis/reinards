import css from "./footer.module.scss"
import "animate.css"
import React from "react";
import { InlineWidget } from "react-calendly";

export default function Footer() {
    return (
      <footer id="footer" className={css.footer+" flex flex-column justify-center pv4 pv5-l"}>

<div className="ph4 ph6-l pb4 pt0 pb5-l flex">
        <div className='w-70 flex flex-column justify-center'>
          <div>
            <h1 className="f1">Let's talk</h1>
            <p className='f4 subtitle'>You know your business, I know brand design.<br/>
            Let's build something awesome!</p>
          </div>
        </div>
        <div className='w-30 pv4'>
          
        </div>
      </div>

      <div className="flex flex-column-reverse flex-row-l ph4 ph6-l">
        <div className="w-50-l mb0-l">
          <p className="subtitle">Copyright © Reinards Jānis Saulītis {new Date().getFullYear()}</p>
        </div>
        <div className="w-50-l flex justify-end-l">
            <a className="subtitle pr2" rel="noopener noreferrer" href="http://instagram.com/rjsaulitis/" title="Instagram">Instagram</a>
            <a className="subtitle pr2" rel="noopener noreferrer" href="http://tiktok.com/@rjsaulitis" title="TikTok">TikTok</a>
            <a className="subtitle pr2" rel="noopener noreferrer" href="https://www.linkedin.com/in/rjsaulitis/" title="LinkedIn">LinkedIn</a>
            <a className="subtitle" rel="noopener noreferrer" href="http://facebook.com/rjsaulitis/" title="Facebook">Facebook</a>
        </div>
      </div>
      
      </footer>
    )
}
