import styles from "./styles.module.scss";

export default function About(){
    return (
        <section className={styles.containerSection} id="about">
            <h2>
                Sobre Mim
            </h2>

            <p>
                Sou desenvolvedor Full Stack com foco em aplicações web modernas e APIs REST.
                Atuo no desenvolvimento de soluções completas, do backend ao frontend, sempre buscando código limpo, bem estruturado e testável.

                Tenho experiência prática com Next.js, TypeScript, Node.js, Prisma e PostgreSQL, além da construção de fluxos reais como e-commerce, carrinho, pedidos e integração com APIs.

                Atualmente busco minha primeira oportunidade profissional como desenvolvedor, com o objetivo de evoluir tecnicamente, contribuir com o time e entregar software de qualidade.
            </p>
        </section>
    )
}