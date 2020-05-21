import React from 'react';
import './App.css';
import { HashRouter, Route} from 'react-router-dom';
import Products from './Component/Products';
import AddingProduct from './Component/AddingProduct';
function App() {
  return (
    <div className="App">
      <nav className="App-header">
        <ul>
          <li><a href="https://aravinth-codingmart.github.io/Shopping-App/#/homepage"><button>Home Page</button></a></li>
          <li><a href="https://aravinth-codingmart.github.io/Shopping-App/#/admin"><button>Admin</button></a></li>
        </ul>
      </nav>
      <HashRouter basename='/'>
      <Route path="/homepage" component={Products}></Route>
      <Route path="/admin" component={AddingProduct}></Route>
      </HashRouter>
    </div>
  );
}

export default App;
