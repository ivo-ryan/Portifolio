import { ProjectsProps } from "@/services/projectsService";
import styles from "./styles.module.scss";

interface props  {
    project: ProjectsProps
}


export default function Slide ({ project }:props) {

    return (

            <div className={styles.containerProject} >
                <img src={project.imgUrl} alt={project.name} className={styles.slideImg}/>
                <h2 className={styles.title}>{project.name}</h2>
                <p className={styles.description}>{project.description}</p>
            </div>
    )
}