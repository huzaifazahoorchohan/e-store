import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Components
import Header from './Components/Header';
import Products from './Components/Products';
import Cart from './Components/Cart';
import Middle from './Components/Middle';

// Context Data Provider
import { ProductContextProvider } from './Context/GlobalContext';

/// deployed link
// shoestore-huzaifa.surge.sh

const App = () =>{
  return(
  <ProductContextProvider>
    <Router>
      <Header />
      <Routes>
        <Route path = '/' element = {<Middle/>} />
        <Route path = '/products' element = {<Products />} />
        <Route path = '/cart' element = {<Cart />} />
      </Routes>
    </Router>
  </ProductContextProvider> 
  )
};

export default App;