import React from 'react';
import './App.css';
import { HashRouter, Route} from 'react-router-dom';
import Products from './Component/Products';
import AddingProduct from './Component/AddingProduct';
function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><button>Home Page</button></li>
          <li><button>Admin</button></li>
        </ul>
      </nav>
      <AddingProduct></AddingProduct>
      <HashRouter basename='/'>
      <Route path="/homepage" component={Products}></Route>
      </HashRouter>
    </div>
  );
}

export default App;
