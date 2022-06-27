import { useEffect, useState } from 'react'
import { fetchAllPokemon } from './App'

const initialState = {
    stage: 'idle',
    retries: 0,
    data: null,
}

const useStateMachine = () => {
    const [state, setState] = useState(initialState);

    const getData = () => {
        fetchAllPokemon().then((data) => {
            setState((prev) => ({
                ...prev,
                stage: 'resolved',
                data,
            }));
        }).catch(() => {
            setState((prev) => ({
                ...prev,
                stage: 'rejected',
                retries: prev.retries + 1,
            }));
        })
    }

    useEffect(() => {
        switch(state.stage) {
            case 'idle':
                return setState((prev) => ({
                    ...prev,
                    stage: 'fetching',
                }));
            case 'fetching':
                return getData()
            case 'rejected':
                if (state.retries < 3) {
                    setState((prev) => ({
                        ...prev,
                        stage: 'loading',
                    }));
                }
                return
            default: break;
        }
    }, [state])

    if (state.stage !== "resolved") return [];
    return state.data.results;
}

export default useStateMachine
