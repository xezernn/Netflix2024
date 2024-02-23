import React from 'react'
import HomePage from './Components/NoReg/HomePage'
import { Route, Routes } from 'react-router-dom'
import RegMain from './Components/Login and Reg/RegMain1'
import RegMain2 from './Components/Login and Reg/RegMain2'
import RegMain3 from './Components/Login and Reg/RegMain3'
import RegPlan from './Components/Login and Reg/RegPlan'
import PaymentPicker from './Components/Login and Reg/PaymentPicker'
import CreditOption from './Components/Login and Reg/CreditOption'
import { Toaster } from 'react-hot-toast'
import SignIn from './Components/Login and Reg/SignIn'
import Home from './Components/Browse/Home'
import SelectProfile from './Components/Browse/SelectProfile'
import { useSelector } from 'react-redux'
import Diziler from './Components/Browse/Diziler'
import EnYeniler from './Components/Browse/EnYeniler'
import Filmler from './Components/Browse/Filmler'
import MyList from './Components/Browse/MyList'
import DileGore from './Components/Browse/DileGore'

function App() {
  const { user } = useSelector(state => state.auth)

  return (
    <>
      <Toaster />
      <Routes>
        {user ? <Route index element={<SelectProfile />} /> : <Route index element={<HomePage />} />}
        <Route path='signup/registration' element={<RegMain />} />
        <Route path='signup/regform' element={<RegMain2 />} />
        <Route path='signup/chooseplan' element={<RegMain3 />} />
        <Route path='signup/planform' element={<RegPlan />} />
        <Route path='signup/paymentPicker' element={<PaymentPicker />} />
        <Route path='signup/creditoption' element={<CreditOption />} />
        <Route path='login' element={<SignIn />} />
        <Route path='selectprofile' element={<SelectProfile />} />
        <Route path='browse' element={<Home />} />
        {user && <Route path='genre' element={<Diziler />} />}
        {user && <Route path='filmler' element={<Filmler />} />}
        {user && <Route path='latest' element={<EnYeniler />} />}
        {user && <Route path='my-list' element={<MyList />} />}
        {user && <Route path='original-audio' element={<DileGore />} />}
      </Routes>
    </>
  )
}

export default App