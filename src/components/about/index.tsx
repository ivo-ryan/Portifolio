import styles from "./styles.module.scss";

export default function About(){
    return (
        <section className={styles.containerSection} id="about">
            <h2>Sobre mim</h2>

            <p>
                Sou <strong>Desenvolvedor Frontend </strong> com foco em React e Next.js, criando interfaces modernas, responsivas e de alta qualidade. Tenho experiência prática com JavaScript e TypeScript, consumindo APIs e construindo aplicações web com excelente usabilidade. Também possuo conhecimento em backend com Node.js e PostgreSQL, o que me ajuda a compreender melhor a integração entre front e back e escrever código organizado e escalável.
            </p>
        </section>

    )
}