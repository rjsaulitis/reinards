import css from "./cta.module.scss"

export default function cta({url, children}) {

  return (
    <>
      <a target="_blank" className={css.cta+" pv3 ph4 m0-l"} href={url}>{children}</a>
    </>
  )
}
