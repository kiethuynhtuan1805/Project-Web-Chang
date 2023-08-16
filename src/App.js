import './App.scss';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalHome, ProductDetail, Login, Signup } from './Pages';
import { ScrollToTop, UserLayout } from 'Components';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='' element={<UserLayout />}>
          <Route index element={<GlobalHome />} />
          <Route path='/products/:productId' element={<ProductDetail />}></Route>
          {/* <Route path='/collections'>
            <Route index></Route>
          </Route> */}
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
