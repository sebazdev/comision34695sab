import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  // const imagen = <img src="url" alt="imagen" />

  return (
    <div className="App">
      {/* <header id="header" className="App-header OtraClase">
        <p>
          Bienvenidos
        </p>
        <button style={{ color: 'red', backgroundColor: 'green', fontSize: '30px'}}>Boton</button>
        {imagen}
      </header> */}
      <Navbar />
    </div>
  );
}

export default App;
