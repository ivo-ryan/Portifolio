                                       
import Header from "@/components/header/headerTop";
import styles from "./page.module.scss";
import HeaderSection from "@/components/header/headerSection";
import Technologies from "@/components/technologies";
import Projects from "@/components/projects";
import Footer from "@/components/footer";
import { projectsService } from "@/services/projectsService";
import About from "@/components/about";

export default async function Home() {
  const projects = await projectsService.projectsAll();

  return (
    <>
      <main className={styles.mainBackground}>
          <div className={styles.containerHeader}>
            <video src="/video.mp4" autoPlay muted loop className={styles.videoBackground}></video>
          </div>
            <Header />
            <HeaderSection/>          

          <About/>
          <Technologies />
          <Projects projects={projects} />

          <Footer/>

      </main>
    </>
  );
}
