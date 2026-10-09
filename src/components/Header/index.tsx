
import { Link, useLocation } from "react-router-dom"
import styles from "./Header.module.scss"

const Header = () => {
    const location = useLocation()
    console.log(location.pathname)

    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.links}>
                    <li>
                        <Link className={styles.link} to="/contato" >
                            <p>CONTATO</p>
                            {location.pathname === "/contato" ? <hr className={styles.linkBar} /> : <hr className={styles.linkBarDesactive} />}
                        </Link>

                    </li>
                    <li>
                        <Link to="/servico" className={styles.link}>
                            <p>SERVIÇO</p>
                            {location.pathname === "/servico" ? <hr className={styles.linkBar} /> : ""}
                        </Link>
                    </li>
                    <li>
                        <Link to="/orcamento" className={styles.link}>
                            <p>ORÇAMENTO</p>
                            {location.pathname === "/orcamento" ? <hr className={styles.linkBar} /> : ""}
                        </Link>
                    </li>
                    <li>
                        <Link to="/equipe" className={styles.link}>
                            <p>EQUIPE</p>
                            {location.pathname === "/equipe" ? <hr className={styles.linkBar} /> : ""}
                        </Link>
                    </li>
                    <li>
                        <Link to="/empresa" className={styles.link}>
                            <p>EMPRESA</p>
                            {location.pathname === "/empresa" ? <hr className={styles.linkBar} /> : ""}
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header