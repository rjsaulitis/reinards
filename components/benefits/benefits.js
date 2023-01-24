import css from "./benefits.module.scss"
import Image from 'next/image'
import Benefit1 from '../../public/images/horse.png'
import Benefit2 from '../../public/images/image.png'
import Benefit3 from '../../public/images/handshake.png'
import Benefit4 from '../../public/images/convo.png'

export default function Benefits() {
    return (
        <div className="relative pv4 pv6-l" id="benefits">
          <div className="rscont--extended">
                <div className={css.wrap}>

                        <div className={css.module1}>
                            <div className={css.icon}> <Image src={Benefit1} objectFit="cover" /> </div>
                            <h3>Stratēģija</h3>
                            <p>Izveidosim plānu, kā attīstīt tieši Tava uzņēmuma zīmolu</p>
                        </div>
                        <div className={css.module2}>
                            <div className={css.icon}> <Image src={Benefit2} objectFit="cover" /> </div>
                            <h3>Identitātes Izstrāde</h3>
                            <p>Izveidosim profesionālu tēlu, kas saista Tavus klientus</p>
                        </div>
                        <div className={css.module3}>
                            <div className={css.icon}> <Image src={Benefit3} objectFit="cover" /> </div>
                            <h3>Ilgtermiņa Sadarbība</h3>
                            <p>Palīdzēsim rast funkcionālus risinājumus klientu piesaistei</p>
                        </div>
                        <div className={css.module4}>
                            <div className={css.icon}> <Image src={Benefit4} objectFit="cover" /> </div>
                            <h3>Konsultācijas</h3>
                            <p>Atbildēsim uz jebkuru jautājumu un kopā risināsim problēmas</p>
                        </div>
                    </div>

                </div>
      </div>
    )
}
