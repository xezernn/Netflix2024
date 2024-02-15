import React, { useState } from 'react'
import HomePage from './Components/NoReg/HomePage'
import { Route, Routes } from 'react-router-dom'
import RegMain from './Components/Login and Reg/RegMain1'
import RegMain2 from './Components/Login and Reg/RegMain2'
import RegMain3 from './Components/Login and Reg/RegMain3'
import RegPlan from './Components/Login and Reg/RegPlan'
import PaymentPicker from './Components/Login and Reg/PaymentPicker'
import CreditOption from './Components/Login and Reg/CreditOption'
import { registr } from './firebase'
import { Toaster } from 'react-hot-toast'
import Register from './Components/FireComp/Register'
import Home from './Components/FireComp/Home'
import Login from './Components/FireComp/Login'


function App() {
 

  return (

    <>
      <Toaster />
      <Routes>
        <Route index element={<Home/>} />
        <Route path='/Register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </>


    // <Routes>
      // <Route index element={<HomePage />} />
    //   <Route path='signup/registration' element={<RegMain />} />
    //   <Route path='signup/regform' element={<RegMain2 />} />
    //   <Route path='signup/chooseplan' element={<RegMain3 />} />
    //   <Route path='signup/planform' element={<RegPlan />} />
    //   <Route path='signup/paymentPicker' element={<PaymentPicker />} />
    //   <Route path='signup/creditoption' element={<CreditOption />} />
    // </Routes>

    // <HomePage />
    // <Registr />

  )
}

export default App