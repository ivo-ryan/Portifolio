import { TechsTypes } from "@/services/techsService";
import styles from "./styles.module.scss";

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
                    <div className={styles.card} key={item.id} >
                        <div className={styles.imgBackground} style={{ backgroundImage:`url(${item.imgUrl}) `}} ></div>
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