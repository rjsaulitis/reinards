import css from "./footer.module.scss"
import "animate.css"
import React from "react";
import { InlineWidget } from "react-calendly";

export default function Footer() {
    return (
      <footer id="footer" className={css.footer+" flex flex-column justify-center pv4 pt2-l pb3-l"}>

{/* <div className="ph4 ph6-l pb4 pt0 pb5-l flex">
        <div className='w-70 flex flex-column justify-center'>
          <div>
            <h1 className="f1">Ko saki?</h1>
            <p className='f4 subtitle'>Tu pārzini savu biznesu, Es zīmola attīstību.<br/>
            Kopā spēsim paveikt vairāk! <br/><br/>
            
            <a className="accent2" href="https://calendly.com/rjsaulitis/strategijas-sesija" target="_blank">Tiekamies Zoom</a>
            </p>
          </div>
        </div>
        <div className='w-30 pv4'>
          
        </div>
      </div> */}

      <div className="flex flex-column-reverse flex-row-l ph4">
        <div className="w-50-l">
          <p className="subtitle tc tl-l">Copyright © Reinards Jānis Saulītis {new Date().getFullYear()}</p>
        </div>
        <div className="w-50-l flex justify-center items-center justify-end-l">
            <a className="subtitle pr2" rel="noopener noreferrer" href="http://instagram.com/rjsaulitis/" title="Instagram">Instagram</a>
            <a className="subtitle pr2" rel="noopener noreferrer" href="http://tiktok.com/@rjsaulitis" title="TikTok">TikTok</a>
            <a className="subtitle pr2" rel="noopener noreferrer" href="https://www.linkedin.com/in/rjsaulitis/" title="LinkedIn">LinkedIn</a>
            <a className="subtitle pr2" rel="noopener noreferrer" href="http://facebook.com/rjsaulitis/" title="Facebook">Facebook</a>
        </div>
      </div>
      
      </footer>
    )
}
