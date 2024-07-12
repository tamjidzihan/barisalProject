import { useEffect, useState } from "react";
import { CanceledError } from "axios";
import apiClint from "../services/api-clint";

export interface FetchServiceResponse {
    _id: string;
    image: string;
    name: string;
    slug: string
    description: string;
}

const useService = () => {
    const [service, setService] = useState<FetchServiceResponse[]>([]);
    const [error, setError] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const controller = new AbortController();
        setIsLoading(true);

        apiClint
            .get<FetchServiceResponse[]>('/allservice', { signal: controller.signal })
            .then(res => {
                setService(res.data);
                setIsLoading(false);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setIsLoading(false);
            });

        return () => controller.abort();
    }, []);

    return { service, error, isLoading };
};

export default useService;
