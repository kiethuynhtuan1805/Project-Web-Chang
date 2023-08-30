import './App.scss';
import './GlobalCss/Modal.scss';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalHome, ProductDetail, Login, Signup, AllProduct, Profile, ManagePassword, History, Favorite, Cart } from './Pages';
import { ScrollToTop, UserLayout } from 'Components';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='' element={<UserLayout />}>
          {/* Auth */}
          <Route path='login' element={<Login />}></Route>
          <Route path='signup' element={<Signup />}></Route>
          {/* <Route path="forgot-password" element={<AuthForgotPassword />} />
          <Route path="verify-email/:accessToken" element={<AuthActiveEmail />} />
          <Route
            path="reset-password/:accessToken"
            element={<AuthResetPassword />}
          /> */}

          {/* Public */}
          <Route index element={<GlobalHome />} />
          <Route path='search/:searchId' element={<AllProduct title={'Kết quả tìm kiếm:'} />}></Route>
          <Route path='products' element={<AllProduct title={'Sản phẩm'} />}></Route>
          <Route path='products/:productId' element={<ProductDetail />}></Route>
          <Route path='collections/:collectionsType' element={<AllProduct />}></Route>
          {/* <Route path='/collections'>
            <Route index></Route>
          </Route> */}

          {/* User */}
          <Route path='profile'>
            <Route index element={<Profile />}></Route>
            <Route path='change-password' element={<ManagePassword />}></Route>
            <Route path='history' element={<History />}></Route>
            <Route path='favorite' element={<Favorite />}></Route>
          </Route>
          <Route path='cart' element={<Cart />}></Route>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}
