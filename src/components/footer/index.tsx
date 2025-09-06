import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';
import styles from './styles.module.scss';
import Link from 'next/link';

export default function Footer (){
    return (
        <footer className={styles.footer}>
            <div className={styles.containerInfo}>
                <div className={styles.containerTitle}>
                    <h2><span>Port</span>ifólio</h2>
                    <p>Um portifólio criado para mostrar minha evolução</p>
                </div>

                <div className={styles.containerButtons}>
                    <ul>
                        <li className={styles.btn}>Home</li>
                        <li className={styles.btn}>Projetos</li>
                        <li className={styles.btn}>Contato</li>
                    </ul>
                </div>

            </div>

            <div className={styles.containerContacts}>
                <p>Copyright &copy; 2025 by Ivo Ryan | All Rights Reserved</p>

                <div className={styles.contacts}>
                    <ul>
                        <li>
                            <Link href="https://www.linkedin.com/in/ryan-bastos-a0a8262a7/" target='_blank'>
                                <FaLinkedin/>
                            </Link>
                        </li>

                        <li>
                            <Link href="https://github.com/ivo-ryan" target='_blank'>
                                <FaGithub/>                            
                            </Link>
                        </li>

                        <li>
                            <Link href="https://t.me/ivo_ryan" target='_blank'>
                                <FaTelegram/>                            
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}