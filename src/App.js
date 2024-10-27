import React from 'react';
import "./style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './modules/auth/Login';
import Register from './modules/auth/Register';
import ForgotPassword from './modules/auth/ForgotPassword';
import AppLanding from './modules/landing/AppLanding';
import PaymentLanding from './modules/payment/PaymentLanding';
import PaymentHome from './modules/payment/PaymentHome';
import UpiPayment from './modules/payment/UpiPayment';
import VisaPayment from './modules/payment/VisaPayment';
import PaypalPayment from './modules/payment/PaypalPayment';
import CashPayment from './modules/payment/CashPayment';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<Login />}></Route>
        <Route path='register' element={<Register />} />
        <Route path='forgotPassword' element={<ForgotPassword />} />
        <Route path='applanding' element={<AppLanding />} />
        <Route path='applanding/paymentLanding' element={<PaymentLanding />}>
          <Route path='' element={<PaymentHome/>} />
          <Route path='upipayment' element={<UpiPayment/>} />
          <Route path='visapayment' element={<VisaPayment/>} />
          <Route path='paypalpayment' element={<PaypalPayment/>} />
          <Route path='cashpayment' element={<CashPayment/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App