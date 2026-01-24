"use client"

import { projectsService } from "@/services/projectsService";
import { useEffect, useState } from "react"

export default function useAnalysis () {
    const [ analysisRes , setAnalysisRes ] = useState('');
    const [ loading, setLoading ] = useState(false);
    const [ feature, setFeature ] = useState<string | null>(null);

    useEffect(() => {
        const fecthData = async () => {
          if(!feature ) return 
          try{            
            setLoading(true);
              const res = await projectsService.iaAnalysis(feature);
              setAnalysisRes(res.answer);
          }catch(err){
            setFeature(null);
            setAnalysisRes('Erro ao gerar análise técnica. Tente novamente mais tarde.');
            console.log(err);
          }
          finally{
            setLoading(false);
          }
        }

        fecthData();
    }, [feature]);

    return {
        analysisRes,
        setFeature,
        loading
    }
}