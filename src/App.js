import './App.scss';
import './GlobalCss/Modal.scss';
import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import {
  GlobalHome, WelcomePage, ProductDetail, Login, Signup, AllProduct,
  Profile, ManagePassword, Purchase, Favorite, Cart, Payment, SettingNotification, SettingPrivacy,
  NotificationOrder, NotificationPromotion, NotificationUpdate, VoucherWallet,
} from './Pages';
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
          <Route path='' element={<Navigate to="profile" replace />}></Route>
          <Route path='profile' element={<Profile />}></Route>
          <Route path='password' element={<ManagePassword />}></Route>
          <Route path='purchase' element={<Purchase />}></Route>
          <Route path='favorite' element={<Favorite />}></Route>
          <Route path='cart' element={<Cart />}></Route>
          <Route path='payment' element={<Payment />}></Route>
          <Route path='setting'>
            <Route path='' element={<Navigate to="notification" replace />}></Route>
            <Route path='notification' element={<SettingNotification />}></Route>
            <Route path='privacy' element={<SettingPrivacy />}></Route>
          </Route>
          <Route path='notifications'>
            <Route path='' element={<Navigate to="order" replace />}></Route>
            <Route path='order' element={<NotificationOrder />}></Route>
            <Route path='promotion' element={<NotificationPromotion />}></Route>
            <Route path='new-update' element={<NotificationUpdate />}></Route>
          </Route>
          <Route path='voucher-wallet' element={<VoucherWallet />}></Route>
          <Route path='*' element={<Navigate to="profile" replace />}></Route>
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
