import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import PaymentHeader from './PaymentHeader'
import Footer from '../shares/Footer'

function PaymentLanding() {
  return (
    <Fragment>
        <PaymentHeader></PaymentHeader>
        <div className='mainpayment'>
        <Outlet></Outlet>

        </div>
        <Footer></Footer>
    </Fragment>

  )
}

export default PaymentLanding