import React from 'react';
import "./style.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from './modules/auth/Login';
import Register from './modules/auth/Register';
import ForgotPassword from './modules/auth/ForgotPassword';
import AppLanding from './modules/landing/AppLanding';
function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path='/*' element={<Login/>}></Route>
  <Route path='register' element={<Register/>}/>
  <Route path='forgotPassword' element={<ForgotPassword/>}/>
  <Route path='applanding' element={<AppLanding/>}/>
</Routes>
</BrowserRouter>
  )
}

export default App