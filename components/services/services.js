import css from "./services.module.scss"


export default function Services() {
    return (
        <div className="" id="services">
          <div className="rscont--extended">
        <div className={css.wrap}>

                <div className={css.module1}>
                    <span>01</span>
                    <h2>Zīmola identitātes izstrāde</h2>
                    <p>Tava uzņēmuma tēls ir viens no svarīgākajiem elementiem reputācijas veidošanā. Ja līdz šim par zīmola attīstību neesi daudz dzirdējis - visticamāk tas ir viens no taviem vājuma punktiem.</p>
                    <a>Kā attīstīt zīmolu?</a>
                </div>
                <div className={css.module2}>
                    <span>02</span>
                    <h2>Copywriting, SEO, a/b testi</h2>
                    <p>Mājaslapa ir tavs digitālais īpašums. Ja tu tam nepievērs uzmanību, tu palaid garām vienreizējas iespējas. Pasaulē, kur viss arvien vairāk kļūst digitāls - tu izmanto iespējas vai atpaliec.</p>
                    <a>Kādēļ mājaslapa ir svarīga?</a>
                </div>
                <div className={css.module3}>
                    <span>03</span>
                    <h2>Individuāli risinājumi uzņēmumiem
                    </h2>
                    <p>Jebkurš mūsdienās var atrast freelance dizaineri vai programmētāju un īstenot idejas, bet ja neorientējies zīmola attīstībā - diemžēl nesagaidīsi vēlamos rezultātus.</p>
                    <a>Kā speciālists var palīdzēt?</a>
                </div>
            </div>

        </div>
            <div className={css.deco}></div>
      </div>
    )
}
