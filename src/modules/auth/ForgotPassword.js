import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineCastForEducation } from "react-icons/md";

function ForgotPassword() {
    return (
        <Fragment>
            <div className='container-fluid bg-light' >
                <div className='row justify-content-center' style={{ mdminHeight: "100vh" }}>
                    <div className='col-md-6  align-self-center ' style={{ width: "1000px" }}>
                        <div className='container-fluid' >
                            <div className='row  bg-warning' style={{ height: "400px" }}>
                                <div className='col-md-4 text-center  align-self-center'>

                                    <p className=''><MdOutlineCastForEducation style={{ height: "100px", width: "100px" }} /></p>
                                </div>
                                <div className="col-md-8 bg-info ">
                                    <div className=" d-flex align-items-center py-5 my-3">

                                        <div className="container">
                                            <div className="row">
                                                <div className='col-md-12 mt-2 '>
                                                    <div className='mb-2'>
                                                        <label className="form-label">Email Address</label>
                                                        <input type="email" className="form-control" placeholder='Enter Email'/>
                                                    </div>
                                                </div>
                                                <div className='col-md-12'>
                                                    <div className='mb-2'>
                                                        <label className="form-label">New Password</label>
                                                        <input type="password" className="form-control" placeholder='Enter New Password'/>
                                                    </div>
                                                </div>
                                                <div className='col-md-12 text-center'>
                                                    <div className='mb-2 mt-2'>
                                                        <button className='btn btn-danger'>Forgot</button>
                                                        <Link to={"/login"} className='btn btn-warning ms-2'>Login</Link>
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

export default ForgotPassword