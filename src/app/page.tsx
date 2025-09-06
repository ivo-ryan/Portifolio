                                       
import Header from "@/components/header/headerTop";
import styles from "./page.module.scss";
import HeaderSection from "@/components/header/headerSection";
import Technologies from "@/components/technologies";
import Projects from "@/components/projects";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <main className={styles.mainBackground}>
          <Header/>

          <video src="/video.mp4" autoPlay muted loop className={styles.videoBackground}></video>
          <HeaderSection/>
          <div className={styles.arrow}><img src="/iconArrowDown.svg" alt="Arrow" /></div>
          <Technologies/>
          <Projects/>

          <Footer/>

      </main>
    </>
  );
}
