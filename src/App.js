import './App.css';
import axios from 'axios'
import useStateMachine from './useStateMachine'

export const fetchAllPokemon = async () => {
  try {
    const res = await axios("https://pokeapi.co/api/v2/pokemon?limit=100");
    return res.data

  } catch (err) {
    console.error(err);
  }
};


function App() {

  /* Pick your poison */
//  const data = useStandardFetch()
//  const data = useReactQuery()
//  const data = useFetchEffectHack()
  const data = useStateMachine()


  return (
    <div className="App">
      <header className="App-header">

        {data.map((d) => (
            <div key={d.name}>
                <h1>{d.name}</h1>
            </div>
        ))}
      </header>
    </div>
  );
}

export default App;
