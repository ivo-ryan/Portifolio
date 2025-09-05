import Link from 'next/link';
import styles from './styles.module.scss';

export default function HeaderSection (){
    return (
        <>
            <div className={styles.headerSection}>
                <div className={styles.headerTitle}>
                    <h2 className={styles.subTitle}>Quem sou eu</h2>
                    <h1 className={styles.title} >Desenvolvedor Full Stack JavaScript</h1>
                    <p className={styles.description}>Desenvolvedor Full Stack JavaScript em início de carreira, com sólida base em React, Next.js, Node.js, PostgreSQL e Prisma.</p>      
                    <Link href={"/"} className={styles.btn}>LinkedIn</Link>
                </div>
                <img src="/imgPresentation.png" alt="" className={styles.imgPresentation}/>
            </div>
        </>
    )
}