import css from "./casestudies.module.scss"
import Image from 'next/image'
import "animate.css"

export default function FullSizePhoto({src, width, height}) {
    return (
        <>
            <div className={css.full_photo_wrap}>
                <Image src={"/images/mockups/"+src} width={width} height={height}></Image>
            </div>
        </>
    )
}
