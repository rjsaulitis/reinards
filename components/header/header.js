import css from "./header.module.scss"
import Image from 'next/image'
import 'animate.css'


export default function Header({cover}) {

  return (
    <>
      <div className={css.background}>
        <Image alt="Project Photo" src={"/images/mockups/"+cover} width="1920" height="1080" object-fit="cover"  />
      </div>
    </>
  )
}
