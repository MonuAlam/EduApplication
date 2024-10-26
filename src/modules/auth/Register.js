import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineCastForEducation } from "react-icons/md";


function Register() {
    return (
        <Fragment>
            <div className='container-fluid bg-light'>
                <div className='row justify-content-center' style={{ minHeight: "100vh" }}>
                    <div className='col-md-6  align-self-md-center ' style={{ width: "1000px" }}>
                        <div className='container-fluid' >
                            <div className='row  bg-warning' style={{ height: "auto" }}>
                                <div className='col-md-4 text-center  align-self-center'>

                                    <p className=''><MdOutlineCastForEducation style={{ height: "100px", width: "100px" }} /></p>
                                </div>
                                <div className="col-md-8 bg-info ">
                                    <div className=" d-flex align-items-center py-5 my-3">

                                        <div className="container">
                                            <div className="row">
                                                <div className='col-md-6 '>
                                                    <div className='mb-2'>
                                                        <label className="form-label"> Full Name</label>
                                                        <input type="text" className="form-control" placeholder='Full Name' />
                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                    <div className='mb-2'>
                                                        <label className="form-label"> Phone</label>
                                                        <input type="text" className="form-control" placeholder='Phone Number' />
                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                    <div className='mb-2'>
                                                        <label className="form-label">Parent Full Name</label>
                                                        <input type="text" className="form-control" placeholder='Parent Full Name' />
                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                    <div className='mb-2'>
                                                        <label className="form-label"> Date of Birth</label>
                                                        <input type="date" className="form-control" placeholder='Date of birth' />
                                                    </div>
                                                </div>
                                                <div className='col-md-6 '>
                                                    <div className='mb-2 mt-2'>
                                                        <div>
                                                            <label className="form-check-label ms-1" >Select Gender</label>
                                                        </div>
                                                        <div className="form-check-inline form-switch ">
                                                            <input className="form-check-input " type="radio" role="switch" name='gender' />
                                                            <label className="form-check-label ms-1" >Male</label>
                                                        </div>
                                                        <div className="form-check-inline form-switch">
                                                            <input className="form-check-input" type="radio" role="switch" name='gender' />
                                                            <label className="form-check-label ms-1" >Female</label>
                                                        </div>
                                                        <div className="form-check-inline form-switch">
                                                            <input className="form-check-input" type="radio" role="switch" name='gender' />
                                                            <label className="form-check-label ms-1" >Others</label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='col-md-6'>
                                                    <div className='mb-2 mt-3'>

                                                        {/* <div className="btn-group">
                                                            <button type="button" className="btn btn-warning dropdown-toggle"  data-bs-toggle="dropdown" aria-expanded="false">
                                                            Select Cources
                                                            </button>
                                                            <ul className="dropdown-menu">
                                                                <li><p className="dropdown-item" hidden>Select Cources</p></li>
                                                                <li><p className="dropdown-item">Java Full Stack</p></li>
                                                                <li><p className="dropdown-item" >MERN</p></li>
                                                                <li><p className="dropdown-item">Python</p></li>
                                                                <li><p className="dropdown-item">.Net</p></li>
                                                            </ul>
                                                        </div> */}

                                                        <select className="form-control btn btn-warning ">
                                                            <option hidden className='dropdown-item'>Select Cources</option>
                                                            <option className='dropdown-item' >Java Full Stack</option>
                                                            <option className='dropdown-item' >MERN</option>
                                                            <option className='dropdown-item' >Python</option>
                                                            <option  className='dropdown-item'>.Net</option>
                                                        </select>

                                                    </div>
                                                </div>

                                                <div className='col-md-6'>
                                                    <div className='mb-2'>
                                                        <label className="form-label">Email</label>
                                                        <input type="email" className="form-control" placeholder='Email' />
                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                    <div className='mb-2'>
                                                        <label className="form-label">Password</label>
                                                        <input type="password" className="form-control" placeholder='Email' />
                                                    </div>
                                                </div>
                                                <div className='col-md-12'>
                                                    <div className='mb-2 '>
                                                        <label className="form-label">Address</label>


                                                        <textarea className="form-control" placeholder="Address"></textarea>


                                                    </div>
                                                </div>


                                                <div className='col-md-12 text-center'>
                                                    <div className='mb-2 mt-3'>
                                                        <Link to={"/login"} className='btn btn-success'>Register</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Register