import React from 'react';

// Router-v6
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

// Custom CSS
import './App.css';

// Bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Components
import Header from './Components/Header';
import Cart from './Components/Cart';
import Menu from './Components/Menu';
import Products from './Components/Products';

const App = () =>{
  return(
    <Router>

      <Header />
      <Menu />

      <Routes>
        <Route path = '/cart' element = {<Cart />} />
        <Route path = '/products' element = {<Products />} />
      </Routes>
    </Router>
  )
};

export default App;