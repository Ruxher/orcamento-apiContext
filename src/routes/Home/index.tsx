
import styles from "./Home.module.scss"
import banner from "../../assets/banner.jpg"
import SearchBar from "../../components/SearchBar"
import Carousel from "../../components/Carousel"
import type { ServicesInterface } from "../../types/services"
import NeedHelp from "../../components/NeedHelp"

interface HomeProp {
    services: ServicesInterface[]
}

const Home = ({ services }: HomeProp) => {
    return (
        <section className={styles.page}>
            <div className={styles.banner}>
                <img src={banner} />
            </div>
            <div className={styles.searchBarContainer}>
                <SearchBar />
                <Carousel services={services} />
            </div>
            <NeedHelp />
        </section>
    )
}

export default Home