import { ProjectsProps } from "@/services/projectsService";
import styles from "./styles.module.scss";
import AnaliseTecnica from "../analiseTecnica";
import { motion } from "framer-motion";

interface props  {
    project: ProjectsProps;
}


export default function Slide ({ project }:props) {

    return (

            <div className={styles.containerProject} >
                <div className={styles.container}>

                    <div className={styles.containerImg}>
                        <img src={project.imgUrl} alt={project.name} className={styles.slideImg}/>
                    </div>

                    <div className={styles.containerInfo}>
                        <h2 className={styles.title}>{project.name}</h2>
                        <p className={styles.description}>{project.description}</p>
                        <div className={styles.techs}>
                            <span>Tecnologias utilizadas:</span>
                            <p>{project.technologies}</p>
                        </div>

                            <AnaliseTecnica {...project} />
                    </div>
                </div>

            </div>
    )
}