import axios from "axios"

export type TechsTypes = {
    id: number;
    name: string;
    imgUrl: string;
    description: string;
}


export const techService = {
    getTechs: async () => {
        const req = await axios.get("https://portifolio-api-rp50.onrender.com/api/techs");
        const res = req.data;
        return res;
    }
}