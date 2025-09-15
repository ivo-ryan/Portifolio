
import axios from "axios";

export type ProjectsProps = {
    id: number;
    description: string;
    imgUrl:string;
    name: string;
    vercelUrl:string;
    technologies: string;
    gitUrl: string;
}

export const projectsService = {
    projectsAll: async () => {
        const req = await  axios.get("https://portifolio-api-rp50.onrender.com/api/projects");
        const res = req.data;
        return res
    }
}