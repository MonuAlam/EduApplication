import React, { Fragment } from 'react'
import { MdOutlineCastForEducation } from "react-icons/md";
import { Link } from 'react-router-dom';

function Login() {
    return (
        <Fragment>
            {/* <div className='container mt-md-5'> */}
            <div className='container' >
                <div className='row justify-content-center' style={{ minHeight: "100vh" }}>
                    <div className='col-md-6  md-align-self-center' style={{ width: "1000px"}}>
                        <div className='container-fluid' >
                            <div className='row  bg-warning '>
                                <div className='col-md-4 text-center  align-self-center'>

                                    <p className=''><MdOutlineCastForEducation style={{ height: "100px", width: "100px" }} /></p>
                                </div>

                                <div className='col-md-8  bg-info'>

                                    <div className='col-md-12 mt-2'>
                                        <div className='mb-2'>
                                            <label className="form-label">Email Address</label>
                                            <input type="email" className="form-control" />
                                        </div>
                                    </div>
                                    <div className='col-md-12'>
                                        <div className='mb-2'>
                                            <label className="form-label"> Password</label>
                                            <input type="password" className="form-control" />
                                        </div>
                                    </div>
                                    <div className='col-md-12'>
                                        <div className='mb-2'>
                                            <Link className='text-danger' to={"forgotPassword"}>Forgot Password ?</Link>
                                        </div>
                                    </div>
                                    <div className='col-md-12 text-center'>
                                        <div className='mb-2'>
                                            <button className='btn btn-success'>Login</button>
                                            <Link to={"register"} className='btn btn-success ms-2'>Register</Link>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment >
    )
}

export default Login