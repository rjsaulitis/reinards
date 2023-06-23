import css from "./casestudies.module.scss"
import Image from 'next/image'
import Link from "next/link"
import "animate.css"

export default function Thumbnail({photo, title, url, full}) {

    if (full == "true"){
        return (
            <Link href={"/portfolio/"+url} className={css.thumbnail_fw}>
                <h2 className={css.title}>{title}</h2>
                <Image src={photo} className={css.photo+" "} />
            </Link>
        )
    }else {
        return (
            <Link href={"/portfolio/"+url} className={css.thumbnail}>
                <h2 className={css.title}>{title}</h2>
                <Image src={photo} className={css.photo+" "} />
            </Link>
        )
    }

}
