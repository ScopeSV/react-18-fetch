import { fetchAllPokemon } from './App'
import { useEffect, useRef, useState } from 'react'


const useFetchEffectHack = () => {

    const [data, setData] = useState([]);
    const didFetchRef = useRef(null)

    useEffect(() => {
        if (didFetchRef.current) return

        fetchAllPokemon().then(setData)
        didFetchRef.current = true

    }, [])

    if (data.length === 0) return []

    return data.results

}

export default useFetchEffectHack
