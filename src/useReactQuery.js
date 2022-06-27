import { fetchAllPokemon } from './App'
import { useQuery } from 'react-query'

const useReactQuery = () => {
    const { isSuccess, data} = useQuery("pokemon", fetchAllPokemon);

    if (!isSuccess) return []
    return data.results

}

export default useReactQuery
