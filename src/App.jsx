import './App.css';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import Auth from './pages/Auth';
import Header from './shared/Header';

function App() {
  return (
    <div className="app">
      <Header />
      <Auth />
      <Toaster />
    </div>
  );
}

export default App;
