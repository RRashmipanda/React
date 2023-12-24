// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import TodoList from './components/TodoList';
import ShoppingCart from './components/ShoppingCart';
// import ApiData from './Components/ApiData';
import { TodoProvider } from './context/TodoContext';
import { CartProvider } from './context/CartContext';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/todo">
            <TodoProvider>
              <TodoList />
            </TodoProvider>
          </Route>
          <Route path="/cart">
            <CartProvider>
              <ShoppingCart />
            </CartProvider>
          </Route>
          <Route path="/api" component={ApiData} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
