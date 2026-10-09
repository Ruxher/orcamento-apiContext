
import styles from "./NeedHelp.module.scss"
import ServicesTypes from "../ServicesTypes"


const NeedHelp = () => {
    return (
        <div className={styles.container}>
            <h1>Precisa de um técnico para detectar o serviço necessario?</h1>
            <h3>Solicite uma visita!</h3>
            <ServicesTypes />
        </div>
    )
} 

export default NeedHelp 