import { useEffect, useState } from 'react'
import { Service } from './useService'
import apiClint from '../services/api-clint'

const useServiceItems = (mainServiceSlug: string, mainServiceID: string, itemID: string) => {
    const [serviceItem, setServiceItem] = useState<Service>()

    useEffect(() => {
        apiClint
            .get<Service>(`/${mainServiceSlug}/${mainServiceID}/service/${itemID}`)
            .then(res => {
                setServiceItem(res.data)
            })
            .catch(err => console.error(err));
    }, [])

    return { serviceItem }

}

export default useServiceItems
