import Link from 'next/link';
import styles from './styles.module.scss';
import { FaFileAlt, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export default function HeaderSection (){
    return (
        <>
            <div className={styles.headerSection}>
                <div className={styles.headerTitle}>
                    <h2 className={styles.subTitle}>Quem sou eu</h2>
                    <h1 className={styles.title} >Desenvolvedor Frontend (React / Next.js) com base Full Stack</h1>
                    <p className={styles.description}>
                        Desenvolvedor Front End focado em aplicações web modernas.
                        Experiência prática com React, Next.js, Node.js, PostgreSQL e testes automatizados.
                    </p>  
                    <div className={styles.containerContact}>
                        <Link 
                        href="https://www.linkedin.com/in/ryan-bastos-a0a8262a7/" 
                        target='_blank' 
                        className={styles.btnLinkedin}
                        >
                            <FaLinkedin/>
                            LinkedIn
                        </Link>

                        <Link 
                        href="https://wa.me/5563992644269?text=OI%C3%A1%20Ryan%20,%20acabei%20de%20%20ver%20seu%20portifólio%20e%20queria%20conversar!" 
                        target='_blank' 
                        className={styles.btnWhatsapp}
                        >
                            <FaWhatsapp/>
                            Whatsapp
                        </Link>

                        <Link 
                        href="https://github.com/ivo-ryan" 
                        target='_blank' 
                        className={styles.btnGithub}
                        >
                            <FaGithub/>
                            GitHub
                        </Link>

                        <Link className={styles.btnCv}  href="/curriculo-ivo-ryan.pdf"
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            <FaFileAlt/>
                            Baixar CV
                        </Link>
                    
                    </div>    
                </div>
                <img src="/imgPresentation.png" alt="Imagem de apresentação" className={styles.imgPresentation}/>
            </div>

             <div className={styles.arrow}><img src="/iconArrowDown.svg" alt="Arrow" /></div>
        </>
    )
}