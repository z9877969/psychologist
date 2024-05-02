import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'modern-normalize';
import { BrowserRouter } from 'react-router-dom';
import { ModalProvider } from 'context/ModalProvider.jsx';
import BlogsProvider from 'context/BlogsProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <ModalProvider>
        <BlogsProvider>
          <App />
        </BlogsProvider>
      </ModalProvider>
    </BrowserRouter>
  </React.StrictMode>
);
