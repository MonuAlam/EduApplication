import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import CourceHeader from './CourceHeader'
import Footer from '../shares/Footer'

function CourceLanding() {
    return (
        <Fragment>
            <CourceHeader />
            <div className='mainpayment'>

                <Outlet>

                </Outlet>
            </div>
            <Footer></Footer>
        </Fragment>
    )
}

export default CourceLanding