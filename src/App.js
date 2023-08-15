import './App.scss';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalHome, ProductDetail } from './Pages';
import UserLayout from 'Components/Layout/UserLayout/UserLayout';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<UserLayout />}>
          <Route index element={<GlobalHome />} />
          <Route path='/products/:productId' element={<ProductDetail />}></Route>
          {/* <Route path='/collections'>
            <Route index></Route>
          </Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
