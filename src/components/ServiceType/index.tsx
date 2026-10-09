
import { type ReactNode } from "react"
import styles from "./ServiceType.module.scss"

interface ServiceTypeInterface {
    children: ReactNode
}

const ServiceType = ({children}: ServiceTypeInterface) => {
    return (
        <div>
            <h1>{children}</h1>
        </div>
    )
}

export default ServiceType