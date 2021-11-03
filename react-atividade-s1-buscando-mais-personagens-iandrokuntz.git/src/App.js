import { useEffect, useState } from 'react';
import Characters from './components/Characters';
import './App.css';

function App() {

  const [characterList, setCharacterList] = useState([])
  const [next, setNext] = useState(1)


  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
    .then((response) => response.json())
    .then((response) => {
      setCharacterList(response.results)
      setNext(response.info.next)
    })
    .catch((err) => console.log(err))
  }, [])


  useEffect(() => {
    next &&
    fetch(next)
    .then((response) => response.json())
    .then((response) => {
      setNext(response.info.next)
      setCharacterList([...characterList, ...response.results])
    })
    .catch((err) => console.log(err))
  }, [next])


  return (

    <div className="App">

      <Characters characterList={characterList}/>

    </div>
  );
}

export default App;
