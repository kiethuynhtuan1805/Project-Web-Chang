import './App.scss';
import './GlobalCss/Modal.scss';
import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import {
  GlobalHome, WelcomePage, ProductDetail, Login, Signup, AllProduct,
  Profile, ManagePassword, Purchase, Favorite, Cart, Payment, SettingNotification, SettingPrivacy,
  NotificationOrder, NotificationPromotion, NotificationUpdate, VoucherWallet,
  PaymentPolicy, ReturnPolicy, TransportPolicy, SecurityPolicy,
  TermsOfUse, Guide, VATPolicy, NormalBlog
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
          <Route path='*' element={<Navigate to="" replace />}></Route>
        </Route>

        {/* Product */}
        <Route path='products' element={<UserLayout />}>
          <Route path='' element={<AllProduct title={'Sản phẩm'} />}></Route>
          <Route path=':productId' element={<ProductDetail />}></Route>
          <Route path='collections/*' element={<AllProduct />}></Route>
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

        {/* Policy, User Care */}
        <Route path='/blog' element={<UserLayout />}>
          <Route path='' element={<Navigate to="policy" replace />}></Route>
          <Route path='policy'>
            <Route path='' element={<Navigate to="payment-policy" replace />}></Route>
            <Route path='payment-policy' element={<PaymentPolicy />}></Route>
            <Route path='return-policy' element={<ReturnPolicy />}></Route>
            <Route path='transport-policy' element={<TransportPolicy />}></Route>
            <Route path='vat-policy' element={<VATPolicy />}></Route>
          </Route>
          <Route path='user-care'>
            <Route path='' element={<Navigate to="terms-of-use" replace />}></Route>
            <Route path='security-policy' element={<SecurityPolicy />}></Route>
            <Route path='terms-of-use' element={<TermsOfUse />}></Route>
            <Route path='guide' element={<Guide />}></Route>
          </Route>
          <Route path=':blogId' element={<NormalBlog />}></Route>
        </Route>


        {/* Admin */}

        {/* Else */}
        <Route path='*' element></Route>
      </Routes>
    </BrowserRouter>
  )
}
