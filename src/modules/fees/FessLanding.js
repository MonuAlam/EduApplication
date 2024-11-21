import React, { Fragment } from 'react'
import FessHeader from './FessHeader'
import FessSidebar from './FessSidebar'
import { Outlet } from 'react-router-dom'

function FessLanding() {
  return (
<Fragment>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-12'>
                <FessHeader/>
            </div>
        </div>
        <div className='row'>
            <div className='col-md-2'>
                <FessSidebar/>
            </div>
            <div className='col-md-10'>
                <Outlet></Outlet>
            </div>
        </div>
        <div className='row'>
            <div className='col-md-12'>
                <footer/>
            </div>
        </div>
    </div>
</Fragment> 
 )
}

export default FessLanding