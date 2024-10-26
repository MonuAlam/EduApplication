import React from 'react';
import "./style.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from './modules/auth/Login';
import Register from './modules/auth/Register';
import ForgotPassword from './modules/auth/ForgotPassword';
function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path='/*' element={<Login/>}></Route>
  <Route path='register' element={<Register/>}/>
  <Route path='forgotPassword' element={<ForgotPassword/>}/>
</Routes>
</BrowserRouter>
  )
}

export default App