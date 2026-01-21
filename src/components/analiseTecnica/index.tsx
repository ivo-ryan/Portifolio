
import Link from "next/link";
import useAnalysis from "../customComponent/createAnalysis";
import styles from "./styles.module.scss";
import { FaGithub, FaPlay } from "react-icons/fa";
import { useState } from "react";
import { AiAnalysisModal } from "./modalAnalysis";

type projectProps = {
    features: string;
    gitUrl: string;
    vercelUrl: string;
    id: number;
}

export default function AnaliseTecnica ({features, gitUrl, vercelUrl, id}:projectProps){
    const { analysisRes, loading, setFeature } = useAnalysis();
    const [ isOpen, setIsOpen ] = useState<boolean>(false);

    return (
        <>
            <div className={styles.links}>

                <Link href={vercelUrl} className={styles.vercel} target="_blank" >
                        <FaPlay/>
                        Vercel
                </Link>

                <Link href={gitUrl} className={styles.github} target="_blank" >
                        <FaGithub/>
                        GitHub
                </Link>

                <div className={styles.analysis} onClick={() =>{ setFeature(features); setIsOpen(true)}}>
                    <p >
                        Análise Técnica
                    </p>

                    <AiAnalysisModal content={analysisRes} isOpen={isOpen} loading={loading} onClose={() => setIsOpen(false)} />
                </div>


            </div>
        </>
    )
}