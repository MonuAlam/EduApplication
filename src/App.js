import React from 'react';
import "./style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy,Suspense } from 'react';
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
import CourceLanding from './modules/cources/CourceLanding';
import CourceHome from './modules/cources/CourceHome';
import Development from './modules/cources/Development';
import UIUX from './modules/cources/UIUX';
import Maketing from './modules/cources/Maketing';
import WebDesign from './modules/cources/WebDesign';
import NotesLanding from './modules/notes/NotesLanding';
import NotesHome from './modules/notes/NotesHome';
import OopsNotes from './modules/notes/OopsNotes';
import JsNotes from './modules/notes/JsNotes';
import PythonNotes from './modules/notes/PythonNotes';
import JavaNotes from './modules/notes/JavaNotes';
import ClassLanding from './modules/classes/ClassLanding';
import ClassHome from './modules/classes/ClassHome';
import DetailsPage from './modules/classes/DetailsPage';
import Loader from './modules/shares/Loader';
import FessLanding from './modules/fees/FessLanding';
import FessHome from './modules/fees/FessHome';
//import LazyClass from './modules/classes/LazyClass';

const LazyClass=lazy(()=>import('./modules/classes/LazyClass'));
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<Login />}></Route>
        <Route path='register' element={<Register />} />
        <Route path='forgotPassword' element={<ForgotPassword />} />
        <Route path='applanding' element={<AppLanding />} />
        <Route path='applanding/paymentLanding' element={<PaymentLanding />}>
          <Route path='' element={<PaymentHome />} />
          <Route path='upipayment' element={<UpiPayment />} />
          <Route path='visapayment' element={<VisaPayment />} />
          <Route path='paypalpayment' element={<PaypalPayment />} />
          <Route path='cashpayment' element={<CashPayment />} />
        </Route>
        <Route path='applanding/courceLanding' element={<CourceLanding />}>
          <Route path='' element={<CourceHome />} />
          <Route path='webdesign' element={<WebDesign />} />
          <Route path='development' element={<Development />} />
          <Route path='uiux' element={<UIUX />} />
          <Route path='marketing' element={<Maketing />} />
        </Route>
        <Route path='applanding/notestLanding' element={<NotesLanding />}>
          <Route path='' element={<NotesHome />} />
          <Route path='oopsnotes' element={<OopsNotes />} />
          <Route path='jsnotes' element={<JsNotes />} />
          <Route path='pythonnotes' element={<PythonNotes />} />
          <Route path='javanotes' element={<JavaNotes />} />
        </Route>

        <Route path='applanding/classesLanding' element={<ClassLanding/>}>
          <Route path='' element={<ClassHome/>}/>
          <Route path='detailpage/:id' element={<DetailsPage/>}/>
          <Route path='lazyclass' element={<Suspense fallback={<Loader/>}>
            <LazyClass/>
          </Suspense>}/>
        </Route>
        <Route path='applanding/feesLanding' element={<FessLanding/>}>
          <Route path='' element={<FessHome/>}/>
          
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App