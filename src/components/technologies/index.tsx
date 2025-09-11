import { TechsTypes } from "@/services/techsService";
import styles from "./styles.module.scss";
import { url } from "inspector";

interface props {
    techs: TechsTypes[];
}

export default function Technologies({ techs }: props) {
    return (
        <section className={styles.sectionContainer}>
            <h2>Principais Tecnologias </h2>

            <div className={styles.containerTechs}>
                {
                    techs.map(item => (
                    <div className={styles.card} key={item.id} style={{ backgroundImage:`linear-gradient( #111, transparent) url(${item.imgUrl}) `}}>
                        <h2 className={styles.title}>{item.name}</h2>
                        <p className={styles.description}>
                            {item.description}
                        </p>
                    </div>
                    ))
                }
          
            </div>
            
        </section>
    )
}