import styles from "./styles.module.scss";


export default function Technologies() {

    return (
        <section className={styles.tech} > 
            <h2>Tecnologias</h2>

            <div className={styles.techGroup}>
                <h3>Front-end</h3>
                <div className={styles.techList}>
                <span>React</span>
                <span>Next.js</span>
                <span>TypeScript</span>
                <span>JavaScript</span>
                <span>SCSS</span>
                </div>
            </div>

            <div className={styles.techGroup}>
                <h3>Back-end</h3>
                <div className={styles.techList} >
                <span>Node.js</span>
                <span>REST API</span>
                <span>Prisma ORM</span>
                </div>
            </div>

            <div className={styles.techGroup}>
                <h3>Banco de Dados</h3>
                <div className={styles.techList}>
                <span>PostgreSQL</span>
                </div>
            </div>

            <div className={styles.techGroup}>
                <h3>Testes & Ferramentas</h3>
                <div className={styles.techList}>
                <span>Vitest</span>
                <span>Git</span>
                <span>GitHub</span>
                </div>
            </div>
        </section>

    )
}