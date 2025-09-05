import styles from './styles.module.scss';

export default function Header(){
    return (
        <>
            <header className={styles.container}>
                <div className={styles.logoContainer}>
                    <img src="/logoOnebitflix.svg" alt="logo" />
                </div>
                <nav >
                    <ul>
                        <li>Sobre</li>
                        <li>Projetos</li>
                    </ul>
                </nav>

            </header>
        </>
    )
}