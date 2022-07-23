import { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Counter from './components/Counter/Counter';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Button from './components/Button/Button';

function App() {
  const [show, setShow] = useState(true)

  return (
    <div className="App"> 
      {/* <Navbar /> */}
      <button style={{ color: show ? 'red' : 'green'}} onClick={() => setShow(!show)}>{show ? 'Ocultar' : 'Mostrar'}</button>
      {/* {show ? <Counter /> : null}  */}
      {/* <ItemListContainer greeting='Hola comision 34695'/> */}
      { show ? <Button /> : null }
    </div>
  );
}

export default App;
