import css from "./casestudies.module.scss"
import Image from 'next/image'
import "animate.css"

export default function ProjectDetails({children, client, company, job1title, job1who, job2title, job2who, job3title, job3who}) {

    if(job2title && !job3title) {
        return (
            <>
                <div className="flex flex-column flex-row-l justify-center pv4 pv6-l w-90 w-50-l margin-auto">
                    <div className={css.description+" w-70-l"}>
                        <h2>Apraksts</h2>
                        <p className={css.project_description+" w-90-l"}>
                            {children}
                        </p>
                    </div>
                    <div className={css.credits+" flex flex-column w-30-l"}>
                        <div className={css.credit}>
                            <h3 className="mb2">Klients:</h3>
                            <p className="mt0">{client} ({company})</p>
                        </div>
                        <div className={css.credit}>
                            <h3 className="mb2">{job1title}:</h3>
                            <p className="mt0">{job1who}</p>
                        </div>
                        <div className={css.credit}>
                            <h3 className="mb2">{job2title}:</h3>
                            <p className="mt0">{job2who}</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    else if(job3title) {
        return (
            <>
                <div className="flex flex-column flex-row-l justify-center pv4 pv6-l w-90 w-50-l margin-auto">
                    <div className={css.description+" w-70-l"}>
                        <h2>Apraksts</h2>
                        <p className={css.project_description+" w-90-l"}>
                            {children}
                        </p>
                    </div>
                    <div className={css.credits+" flex flex-column w-30"}>
                        <div className={css.credit}>
                            <h3 className="mb2">Klients:</h3>
                            <p className="mt0">{client} ({company})</p>
                        </div>
                        <div className={css.credit}>
                            <h3 className="mb2">{job1title}:</h3>
                            <p className="mt0">{job1who}</p>
                        </div>
                        <div className={css.credit}>
                            <h3 className="mb2">{job2title}:</h3>
                            <p className="mt0">{job2who}</p>
                        </div>
                        <div className={css.credit}>
                            <h3 className="mb2">{job3title}:</h3>
                            <p className="mt0">{job3who}</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }else{
        return (
            <>
                <div className="flex flex-column flex-row-l justify-center pv4 pv6-l w-90 w-50-l margin-auto">
                    <div className={css.description+" w-70-l"}>
                        <h2>Apraksts</h2>
                        <p className={css.project_description+" w-90-l"}>
                            {children}
                        </p>
                    </div>
                    <div className={css.credits+" flex flex-column w-30"}>
                        <div className={css.credit}>
                            <h3 className="mb2">Klients:</h3>
                            <p className="mt0">{client} ({company})</p>
                        </div>
                        <div className={css.credit}>
                            <h3 className="mb2">{job1title}:</h3>
                            <p className="mt0">{job1who}</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}
