import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from '../components/Header/Header';
import Home from '../components/Home/Home';
import Catalog from '../features/catalog/components/Catalog';
import Footer from '../components/Footer/Footer';
import Confidentiality from '../components/Сonfidentiality/Сonfidentiality';

import './App.scss';

function App() {

  return (
    <div >
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog/:name' element={<Catalog />} />
        <Route path='/confidentiality' element={<Confidentiality />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
