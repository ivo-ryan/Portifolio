                                       
import Header from "@/components/header/headerTop";
import styles from "./page.module.scss";
import HeaderSection from "@/components/header/headerSection";
import Technologies from "@/components/technologies";

export default function Home() {
  return (
    <>
      <main>
          <Header/>
          <div className={styles.sectionBackground}>
            <video src="/video.mp4" autoPlay muted loop className={styles.videoBackground}></video>
            <HeaderSection/>
            <div className={styles.arrow}><img src="/iconArrowDown.svg" alt="Arrow" /></div>
            <Technologies/>
          </div>
      </main>
    </>
  );
}
