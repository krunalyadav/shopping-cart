import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import ShoppingCart from './components/ShoppingCart';

ReactDOM.render(
    <ShoppingCart/>, document.getElementById('shopping-cart'));
registerServiceWorker();