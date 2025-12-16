import styles from "./styles.module.scss";

export default function About(){
    return (
        <section className={styles.containerSection} id="about">
            <h2>Sobre mim</h2>

            <p>
                Sou desenvolvedor <strong>Full Stack</strong> com foco em JavaScript e TypeScript, atuando
                na construção de aplicações web modernas. Tenho experiência prática com
                React, Next.js, Node.js e PostgreSQL, desenvolvendo projetos completos
                com foco em boas práticas, testes automatizados e código limpo.
            </p>
        </section>

    )
}