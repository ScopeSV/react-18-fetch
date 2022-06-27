import { useEffect, useState } from 'react'
import { fetchAllPokemon } from './App'

const useStandardFetch = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetchAllPokemon().then(setData)
    }, [])

    if (data.length === 0) return []

    return data.results

}

export default useStandardFetch;
