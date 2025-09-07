"use client"

import dynamic from "next/dynamic";
import styles from "./styles.module.scss";
// import { Splide, SplideSlide } from "splide-nextjs/react-splide";
import 'splide-nextjs/splide/dist/css/themes/splide-default.min.css';

// Importa dinamicamente
const Splide = dynamic(
  () => import("splide-nextjs/react-splide").then(mod => mod.Splide),
  { ssr: false }
);

const SplideSlide = dynamic(
  () => import("splide-nextjs/react-splide").then(mod => mod.SplideSlide),
  { ssr: false }
);

export default function Projects (){

    return (
        <section>

            <h2>Projetos </h2>

            <div className={styles.containerSlides}>

                <Splide 
                    options={{
                            type: "loop",
                            perPage: 4,
                            perMove: 1,
                            width: 1200,
                            pagination: false,
                            arrows: true,
                            drag: true,
                            breakpoints: {
                                1200: {
                                perPage: 3,
                                width: 800
                                },
                                600: {
                                perPage: 1,
                                width: 300
                                }
                            }
                            }}
                >

                    <SplideSlide>
                            <div className={styles.slide}>
                                <img src="" alt="" />
                                <div className={styles.info}>
                                    <h2></h2>
                                    <p></p>
                                </div>
                            </div>
                    </SplideSlide>

                </Splide>
            </div>
        </section>
    )
}