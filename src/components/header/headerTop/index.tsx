
import styles from './styles.module.scss';
import Link from 'next/link';

export default function Header(){
    return (       
            <header className={styles.container} id='header' >
                <div className={styles.logoContainer}>
                    <h1 className={styles.title}><span>IR</span>.DEV</h1>
                </div>
                <nav >
                    <ul className={styles.navContainer}>
                        <li className={styles.btn}><Link href="#header">Home</Link></li>
                        <li className={styles.btn}><Link href="#projetos">Projetos</Link></li>
                        <li className={styles.btn}><Link href="#about">About</Link></li>
                    </ul>
                </nav>
            </header>       
    )
}