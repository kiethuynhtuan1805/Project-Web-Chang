import './App.scss';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalHome, ProductDetail, Login, Signup, AllProduct } from './Pages';
import { ScrollToTop, UserLayout } from 'Components';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='' element={<UserLayout />}>
          <Route index element={<GlobalHome />} />
          <Route path='/search/:searchId' element={<AllProduct title={'Kết quả tìm kiếm:'} />}></Route>
          <Route path='/products' element={<AllProduct title={'Sản phẩm'} />}></Route>
          <Route path='/products/:productId' element={<ProductDetail />}></Route>
          <Route path='/collections/:collectionsType' element={<AllProduct />}></Route>
          {/* <Route path='/hot' element={<AllProduct />}></Route> */}
          {/* <Route path='/option1' element={<AllProduct />}></Route> */}
          {/* <Route path='/option2' element={<AllProduct />}></Route> */}
          {/* <Route path='/option3' element={<AllProduct />}></Route> */}
          {/* <Route path='/option4' element={<AllProduct />}></Route> */}
          {/* <Route path='/option5' element={<AllProduct />}></Route> */}
          {/* <Route path='/others' element={<AllProduct />}></Route> */}

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
