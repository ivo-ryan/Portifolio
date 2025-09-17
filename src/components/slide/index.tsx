import { ProjectsProps } from "@/services/projectsService";
import styles from "./styles.module.scss";
import Link from "next/link";
import { FaGithub, FaPlay } from "react-icons/fa";

interface props  {
    project: ProjectsProps
}


export default function Slide ({ project }:props) {

    const limitarTexto = (texto: string, limite : number) => {
    return texto.length > limite ? texto.substring(0, limite) + "..." : texto;
    }

    return (

            <div className={styles.containerProject} >
                <div className={styles.container}>

                    <div className={styles.containerImg}>
                        <img src={project.imgUrl} alt={project.name} className={styles.slideImg}/>
                    </div>

                    <div className={styles.containerInfo}>
                        <h2 className={styles.title}>{project.name}</h2>
                    <p className={styles.description}>{limitarTexto(project.description, 150)}</p>
                    <div className={styles.techs}>
                        <span>Tecnologias utilizadas:</span>
                        <p>{project.technologies}</p>
                    </div>
                    </div>
                </div>

                <div className={styles.links}>

                    <Link href={project.vercelUrl} className={styles.vercel} target="_blank" >
                       <FaPlay/>
                       Vercel
                    </Link>

                    <Link href={project.gitUrl} className={styles.github} target="_blank" >
                            <FaGithub/>
                            GitHub
                    </Link>
                </div>
            </div>
    )
}