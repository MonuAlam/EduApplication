import React, { Fragment } from 'react'
import ClassHeader from './ClassHeader'
import { Outlet } from 'react-router-dom'
import Footer from '../shares/Footer'

function ClassLanding() {
  return (
<Fragment>
    <ClassHeader/>
    <div style={{ marginTop: "80px", marginBottom:"20px" }}>
    <Outlet></Outlet>
    </div>
    <Footer/>
</Fragment>
  )
}

export default ClassLanding