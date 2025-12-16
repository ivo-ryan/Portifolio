
import { api } from "./api";

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
        const req = await  api.get("projects");
        const res = req.data;
        return res
    }
}