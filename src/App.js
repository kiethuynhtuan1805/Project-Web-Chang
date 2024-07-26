import './App.scss';
import './GlobalCss/Modal.scss';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalHome, WelcomePage, ProductDetail, Login, Signup, AllProduct, Profile, ManagePassword, Purchase, Favorite, Cart } from './Pages';
import { ScrollToTop, UserLayout } from 'Components';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Auth */}
        <Route path='' element={<WelcomePage />} />
        <Route path='login' element={<Login />}></Route>
        <Route path='signup' element={<Signup />}></Route>

        {/* Home */}
        <Route path='home' element={<UserLayout />}>
          <Route index element={<GlobalHome />} />
          <Route path='search/:searchId' element={<AllProduct title={'Kết quả tìm kiếm:'} />}></Route>
        </Route>

        {/* Product */}
        <Route path='products' element={<UserLayout />}>
          <Route path='' element={<AllProduct title={'Sản phẩm'} />}>
            <Route path=':productId' element={<ProductDetail />}></Route>
            <Route path='collections/:collectionsType' element={<AllProduct />}></Route>
          </Route>
        </Route>

        {/* User */}
        <Route path='user' element={<UserLayout />}>
          <Route index element={<Profile />}></Route>
          <Route path='password' element={<ManagePassword />}></Route>
          <Route path='purchase' element={<Purchase />}></Route>
          <Route path='favorite' element={<Favorite />}></Route>
          <Route path='cart' element={<Cart />}></Route>
          <Route path='setting/notification'>
            <Route path='order'></Route>
            <Route path='promotion'></Route>
          </Route>
          <Route path='setting/privacy'></Route>
          <Route path='voucher-wallet'></Route>
        </Route>

        {/* Privacy */}
        <Route path='about'></Route>
        <Route path='policy'>
          <Route path='term-of-service'></Route>
          <Route path='guide'></Route>
          <Route path='return-policy'></Route>
          <Route path='shipping-policy'></Route>
        </Route>


        {/* Admin */}

        {/* Else */}
        <Route path='*' element></Route>
      </Routes>
    </BrowserRouter>
  )
}
