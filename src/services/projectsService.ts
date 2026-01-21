
import { api } from "./api";

export type ProjectsProps = {
    id: number;
    description: string;
    imgUrl:string;
    name: string;
    vercelUrl:string;
    technologies: string;
    gitUrl: string;
    features: string;
}

export const projectsService = {
    projectsAll: async () => {
        const res = await  api.get("projects").catch((error) => {
            if(error) console.log(error.response.data.message);
            return error.response
        });
        return res.data
    },

    iaAnalysis: async (feature:string) => {
        const res = await api.post("chat", {
            prompt: feature
        }).catch((error) => {
            if(error) console.log(error.response.data.message);
            return error.response
        });

        return res.data 
    }
}