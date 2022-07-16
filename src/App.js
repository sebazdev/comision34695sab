import './App.css';
import Navbar from './components/Navbar/Navbar';
// import Counter from './Counter/Counter';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  // const imagen = <img src="url" alt="imagen" />

  return (
    <div className="App">
      <Navbar />
      {/* <Counter /> */}
      <ItemListContainer greeting='Hola comision 34695'/>
    </div>
  );
}

export default App;
