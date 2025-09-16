                                       
import Header from "@/components/header/headerTop";
import styles from "./page.module.scss";
import HeaderSection from "@/components/header/headerSection";
import Technologies from "@/components/technologies";
import Projects from "@/components/projects";
import Footer from "@/components/footer";
import { projectsService } from "@/services/projectsService";
import { techService } from "@/services/techsService";

export default async function Home() {
  const projects = await projectsService.projectsAll();
  const techs = await techService.getTechs();

  return (
    <>
      <main className={styles.mainBackground}>
          <Header />

          <video src="/video.mp4" autoPlay muted loop className={styles.videoBackground}></video>
          <HeaderSection/>
          <Technologies techs={techs} />
          <Projects projects={projects} />

          <Footer/>

      </main>
    </>
  );
}
