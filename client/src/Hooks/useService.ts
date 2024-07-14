import { useEffect, useState } from "react"
import apiClint from "../services/api-clint"


export interface Service {
    _id: string;
    name: string;
    type: string;
    address?: string;
    image?: string;
    campus?: string;
    founded?: number | null;
    phone?: number | null;
    students?: number | null;
}

const useService = (slug: string) => {
    const [service, setService] = useState<Service[]>([])

    useEffect(() => {
        apiClint
            .get<Service[]>(`/${slug}`)
            .then(res => setService(res.data))
            .catch(err => console.error(err));
    }, [])
    return { service }
}

export default useService;
