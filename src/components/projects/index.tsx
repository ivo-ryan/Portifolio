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
    let slideCount = 0
    const series = [1, 2, 4]
    return (
        <section>

            <h2>Projetos </h2>

            <div className={styles.containerSlides}>

                <Splide 
                    options={{
                            type: "loop",
                            perPage: slideCount,
                            perMove: 1,
                            width: slideCount * 300,
                            pagination: false,
                            arrows: series.length > 4 ? true : false,
                            drag: series.length > 4 ? true : false,
                            breakpoints: {
                                1200: {
                                perPage: slideCount >= 2 ? 2 : 1,
                                width: slideCount >= 2 ? 600 : 300,
                                arrows: series.length > 2 ? true : false,
                                drag: series.length > 2 ? true : false
                                },
                                600: {
                                perPage: 1,
                                width: 300,
                                arrows: series.length > 1 ? true : false,
                                drag: series.length > 1 ? true : false,
                                }
                            }
                            }}
                >

                    <SplideSlide>

                    </SplideSlide>

                </Splide>
            </div>
        </section>
    )
}