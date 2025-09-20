"use client"

import dynamic from "next/dynamic";
import styles from "./styles.module.scss";
import 'splide-nextjs/splide/dist/css/themes/splide-default.min.css';
import Slide from "../slide";
import { ProjectsProps } from "@/services/projectsService";

const Splide = dynamic(
  () => import("splide-nextjs/react-splide").then(mod => mod.Splide),
  { ssr: false }
);

const SplideSlide = dynamic(
  () => import("splide-nextjs/react-splide").then(mod => mod.SplideSlide),
  { ssr: false }
);

interface props  {
    projects: ProjectsProps[]
}

export default  function Projects ({ projects }: props ){
    

    return (
        <section className={styles.sectionContainer} id="projetos" >

            <h2>Projetos</h2>

            <div className={styles.containerSlides}>

                <Splide 
                    options={{
                            type: "loop",
                            perPage: 1,
                            perMove: 1,
                            width: 1350,
                            pagination: false,
                            arrows: true,
                            drag: true,
                            breakpoints: {
                                1200: {
                                width: 1000
                                },
                                1000: {
                                width: 600
                                },
                                600: {
                                    width: 400
                                },

                                400: {
                                    width: 300
                                }
                            }
                            }}
                >

                    {

                        projects?.map((item , index) => (
                            <SplideSlide key={index} >
                                <Slide project={item} />
                            </SplideSlide>
                        ))

                    }


                </Splide>
            </div>
        </section>
    )
}