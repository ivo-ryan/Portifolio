import { FaCommentDots } from 'react-icons/fa';
import styles from './styles.module.scss';

export default function Header(){
    return (
        <>
            <header className={styles.container}>
                <div className={styles.logoContainer}>
                    <h1 className={styles.title}><span>IR</span>.DEV</h1>
                </div>
                <nav >
                    <ul className={styles.navContainer}>
                        <li className={styles.btn}>Sobre</li>
                        <li className={styles.btn}>Projetos</li>
                        <li className={styles.btnIA}><FaCommentDots/> Fale com a IA</li>
                    </ul>
                </nav>

            </header>
        </>
    )
}