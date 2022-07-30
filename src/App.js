import './App.css';
import { useState } from 'react'
import Navbar from './components/Navbar/Navbar';
// import MercadoLibre from './components/MercadoLibre/MercadoLibre';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
// import Counter from './components/Counter/Counter';

function App() {
  const [page, setPage] = useState({ path: 'list', id: '1'})

  return (
    <div className="App"> 
      {/* <Navbar /> */}
      <div>
        <button onClick={() => setPage({...page, path: 'list'})}>list</button>
        {/* <button onClick={() => setPage('detail')}>detalle</button> */}
      </div>
      {page.path === 'list' ? <ItemListContainer greeting='Hola comision 34695' setPage={setPage}/> : null} 
      {page.path === 'detail' ? <ItemDetailContainer id={page.id}/> : null}
    </div>
  );
}

export default App;
