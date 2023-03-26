import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {


  return (
    <>
    <div className='App-header'>
    <NavBar/>
    <ItemListContainer saludo="Hola Mundo!"/> 
    </div>
    </>
  );
}

export default App;
