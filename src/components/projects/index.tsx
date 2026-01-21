"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { ProjectsProps } from "@/services/projectsService";
import Slide from "../slide";
import { motion } from "framer-motion";


interface props  {
    projects: ProjectsProps[]
}

export default  function Projects ({ projects }: props ){

    if(!projects || projects.length === 0) return <p>Projetos não encontrados!</p>
    
    return (
        <section className={styles.sectionContainer} id="projetos" >

            <h2>Projetos</h2>

            <div className={styles.containerSlides}>

               <Swiper
                    modules={[Navigation, Pagination]}
                    pagination={{ clickable: true }}
                    navigation={false}
                    loop
                    slidesPerView={1}
                    spaceBetween={20}
                    breakpoints={{
                        600: {slidesPerView: 2, navigation: true}
                    }}
                >

                    {

                        projects?.map((item , index) => (
                            <SwiperSlide key={index} >
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    viewport={{ once: true }}
                                    >

                                    <Slide project={item} />
                                </motion.div>
                            </SwiperSlide>
                        ))

                    }


                </Swiper>
            </div>
        </section>
    )
}