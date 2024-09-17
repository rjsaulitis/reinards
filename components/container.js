import css from "./container.module.scss"
import "animate.css"

export default function Container({children}) {
    return (
        <div className={css.container}>
            {children}
        </div>
    )
}
