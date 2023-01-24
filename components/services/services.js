import css from "./services.module.scss"
import "animate.css"

export default function Services() {
    return (
        <div className="relative" id="services">
          <div className="rscont--extended">
        <div className={css.wrap}>

                <div className={css.module1+"  animate__animated animate__slideInUp"}>
                    <span>01</span>
                    <h2>Izskaties<br/>Profesionāli</h2>
                    <p>Tava uzņēmuma tēls ir viens no svarīgākajiem elementiem reputācijas veidošanā. Ja līdz šim par zīmola attīstību neesi daudz dzirdējis - visticamāk tas ir viens no taviem vājuma punktiem.</p>
                </div>
                <div className={css.module2+"  animate__animated animate__slideInUp animate__slow"}>
                    <span>02</span>
                    <h2>Piesaisti pašus <br/> labākos klientus</h2>
                    <p>Mājaslapa ir tavs digitālais īpašums. Ja tu tam nepievērs uzmanību, tu palaid garām vienreizējas iespējas. Pasaulē, kur viss arvien vairāk kļūst digitāls - tu izmanto iespējas vai atpaliec.</p>
                </div>
                <div className={css.module3+"  animate__animated animate__slideInUp animate__slower"}>
                    <span>03</span>
                    <h2>Kļūsti uzticams <br/> un gūsti reputāciju
                    </h2>
                    <p>Jebkurš mūsdienās var atrast freelance dizaineri vai programmētāju un īstenot idejas, bet ja neorientējies zīmola attīstībā - diemžēl nesagaidīsi vēlamos rezultātus.</p>
                </div>
            </div>

        </div>
            <div className={css.deco}></div>
      </div>
    )
}
