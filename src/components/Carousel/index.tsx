
import styles from "./Carousel.module.scss"
import type { ServicesInterface } from "../../types/services"

interface CarouselProp {
    services: ServicesInterface[]
}

const Carousel = ({ services } :CarouselProp) => {
    return (
        <div className={styles.cards}>
            {services.map((serv) => {
                return (
                <div className={styles.card}> 
                    <img className={styles.cardImg} src={serv.img} /> 
                    <h1 className={styles.cardTitle}>{serv.service}</h1> 
                    <p className={styles.cardText}>{serv.type}</p> 
                </div>
                    )
            })}
        </div>
    )
}

export default Carousel