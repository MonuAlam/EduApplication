import React, { Fragment } from 'react'
import NotesHeader from './NotesHeader'
import Footer from '../shares/Footer'
import NotesHome from './NotesHome'
import { Outlet } from 'react-router-dom'

function NotesLanding() {
  return (
    <Fragment>
        <NotesHeader></NotesHeader>
        <div style={{ marginTop: "80px", marginBottom:"20px" }}>
        <Outlet>


        </Outlet>
        </div>
        <Footer></Footer>
    </Fragment>
  )
}

export default NotesLanding