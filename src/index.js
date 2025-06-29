import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SignatureDisplay from './components/SignatureDisplay';

function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    nome: params.get('nome') || '',
    cargo: params.get('cargo') || '',
    email: params.get('email') || '',
    telefone: params.get('telefone') || '',
    whatsapp: params.get('whatsapp') || '',
    site: params.get('site') || '',
    imagem_path: params.get('imagem_path') || '',
  };
}

if (window.location.pathname.endsWith('index.html')) {
  ReactDOM.render(
    <SignatureDisplay data={getQueryParams()} />,
    document.getElementById('root')
  );
} else {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}