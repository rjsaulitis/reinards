import css from "./casestudies.module.scss"
import Image from 'next/image'
import "animate.css"

export default function ProjectDetails({children, client, company, design, web, marketing}) {
    return (
        <>
            <div className="flex flex-column flex-row-l justify-center pv4 pv6-l w-90 w-50-l margin-auto">
                <div className={css.description+" w-70-l"}>
                    <h2>Apraksts</h2>
                    <p className="w-90-l">
                        {children}
                    </p>
                </div>
                <div className={css.credits+" flex flex-column w-30"}>
                    <div className={css.credit}>
                        <h3 className="mb2">Klients:</h3>
                        <p className="mt0">{client} ({company})</p>
                    </div>
                    <div className={css.credit}>
                        <h3 className="mb2">Dizains:</h3>
                        <p className="mt0">{design}</p>
                    </div>
                    <div className={css.credit}>
                        <h3 className="mb2">Web Izstrāde:</h3>
                        <p className="mt0">{web}</p>
                    </div>
                    {/* <div className={css.credit}>
                        <h3 className="mb2">Mārketings:</h3>
                        <p className="mt0">{marketing}</p>
                    </div> */}
                </div>
            </div>
        </>
    )
}
