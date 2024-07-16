import { useEffect, useState } from "react"
import apiClint from "../services/api-clint"


export interface Service {
    _id: string;
    name: string;
    type: string;
    address: string | null;
    image: string | null;
    branch: string | null;
    phone: string | null;
    founded: string | null;
    campus: string | null;
    students: string | null;
    contact: string | null;
    location: string | null;
    description: string | null;
    destinations: string | null;
}

export interface FetchServicelistResponse {
    _id: string;
    name: string;
    type: string;
    description: string;
    slug: string;
    image: string;
    result: Service[];
}

const useService = (slug: string) => {

    const [serviceList, setServiceList] = useState<FetchServicelistResponse[]>([])



    useEffect(() => {
        apiClint
            .get<FetchServicelistResponse[]>(`/${slug}`)
            .then(res => {
                setServiceList(res.data)
            })
            .catch(err => console.error(err));
    }, [])
    return { serviceList }
}

export default useService;
