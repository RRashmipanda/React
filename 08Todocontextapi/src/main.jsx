// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { TodoProvider } from './context/TodoContext';
import { CartProvider } from './context/CartContext';

ReactDOM.render(
  <React.StrictMode>
    <TodoProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </TodoProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
