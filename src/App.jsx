import { useEffect, useState } from 'react'
import './App.css'
import { UseReducer } from './components/UseReducer';
import { UseRef } from './components/UseRef';

function App() {
  const [count, setCount] = useState(0)


  // useEffect se ejecuta despues de cada renderizado
  useEffect(() => {
    // Actualiza el titulo del documento con el count (pestaña de la pagina)
    document.title = `Count is ${count}`;
  }, [count]);

  return (
    <>
      <h2>React Hooks Practice</h2>
      <div className="card">
        <hr />
        <h2>Exercise Hook useState</h2>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <hr />
      </div>
      <UseReducer />
      <UseRef count={count}  setCount={setCount}/>
    </>
  )
}

export default App
