import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Pages';
import UserLayout from 'Components/Layout/UserLayout/UserLayout';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<UserLayout />}>
          <Route index element={<Home />} />
          {/* <Route path='//' element={<Home />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
