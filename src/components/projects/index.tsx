"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { ProjectsProps } from "@/services/projectsService";
import Slide from "../slide";


interface props  {
    projects: ProjectsProps[]
}

export default  function Projects ({ projects }: props ){
    

    return (
        <section className={styles.sectionContainer} id="projetos" >

            <h2>Projetos</h2>

            <div className={styles.containerSlides}>

               <Swiper
                    modules={[Navigation, Pagination]}
                    navigation={false}
                    pagination={{ clickable: true }}
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
                                <Slide project={item} />
                            </SwiperSlide>
                        ))

                    }


                </Swiper>
            </div>
        </section>
    )
}