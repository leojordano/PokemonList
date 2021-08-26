import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

localStorage.getItem('@pokelist:likedPokemonList') ??
  localStorage.setItem('@pokelist:likedPokemonList', JSON.stringify([]));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
