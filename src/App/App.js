import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from '../components/Header/Header';
import Home from '../components/Home/Home';
import Catalog from '../features/catalog/components/Catalog';
import Footer from '../components/Footer/Footer';

import './App.scss';

function App() {

  return (
    <div >
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog/:name' element={<Catalog />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
