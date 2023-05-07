import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartScreen from './components/CartScreen/CartScreen';
import { CartProvider } from './components/context/CartContex';
import Checkout from './components/Checkout/Checkout';


function App() {

  return (
    <CartProvider>
    <div className='App'>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/productos/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/detail/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='/checkout' element={<Checkout/>}/> 
          <Route path='/cart' element={<CartScreen/>}/>
          <Route path='*' element= {<Navigate to = '/'/>} />
        </Routes>
      </Router>
    </div>
    </CartProvider>


  );
}

export default App;
