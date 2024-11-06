import css from "./cta.module.scss"

export default function cta({url, children, inverse}) {

  if (inverse){
    return (
      <>
        <a target="_blank" className={css.cta_inverse+" pv3 ph4 m0-l"} href={url}>{children}</a>
      </>
    )
  }else{
    return (
      <>
        <a target="_blank" className={css.cta+" pv3 ph4 m0-l"} href={url}>{children}</a>
      </>
    )
  }
}
