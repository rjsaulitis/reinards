import css from "./services.module.scss"
import "animate.css"

export default function Services() {
    return (
        <div className="relative" id="services">
          <div className="rscont--extended">
        <div className={css.wrap}>

                <div className={css.module1+"  animate__animated animate__slideInUp"}>
                    <span>01</span>
                    <h2>Grafiskais Dizains</h2>
                    <p>Profesionāls grafiskais dizains un fotogrāfijas Tevi izceļ konkurentu vidū, palīdz izskatīties profesionāli, komunicē kvalitāti, rada uzticību un piesaista labāk maksājošus klientus.</p>
                </div>
                <div className={css.module2+"  animate__animated animate__slideInUp animate__slow"}>
                    <span>02</span>
                    <h2>Digitālais Mārketings</h2>
                    <p>Mūsdienu digitālās iespējas Tavu uzņēmumu pacels citā līmenī. Tu jebkurā brīdi vari sasniegt un komunicēt ar miljoniem cilvēku visā pasaulē, ja zini, kā. Es varu tev palīdzēt!</p>
                </div>
                <div className={css.module3+"  animate__animated animate__slideInUp animate__slower"}>
                    <span>03</span>
                    <h2>Copywriting
                    </h2>
                    <p>Komunikācija ir pārdošanas atslēga. Copywriting speciālists Tev palīdz komunicēt efektīvi, piemeklējot īstos vārdus, kas rosina darbību un palīdz pārdot vairāk.</p>
                </div>
            </div>

        </div>
            <div className={css.deco}></div>
      </div>
    )
}
