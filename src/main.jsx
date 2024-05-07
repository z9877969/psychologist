import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'modern-normalize';
import { BrowserRouter } from 'react-router-dom';
import { ModalProvider } from 'context/ModalProvider.jsx';
import BlogsProvider from 'context/BlogsProvider.jsx';
import MainPageProvider from 'context/MainPageProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <ModalProvider>
        <MainPageProvider>
          <BlogsProvider>
            <App />
          </BlogsProvider>
        </MainPageProvider>
      </ModalProvider>
    </BrowserRouter>
  </React.StrictMode>
);
