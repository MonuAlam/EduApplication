import React, { Fragment } from 'react'
import Payment from "../../image/payment.png"
import { Link } from 'react-router-dom'
function AppLanding() {
    return (
        <Fragment>
            <div className='container-fluid'>
                <div className='row justify-content-center' style={{ minHeight: "100vh" }}>
                    <div className='col-md-12 align-self-center'>
                        <div className='container '>
                            <div className='row '>
                                <div className='col-md-3 d-flex justify-content-center '>
                                    <Link to={"paymentLanding"}>
                                        <div className="card shadow bg-warning h-100" style={{ width: "12rem", alignItems: "center" }}>
                                            <img src={Payment} className="card-img-top mt-2 w-50 h-40" alt="..." />
                                            <div className="card-body text-white">
                                                <h5 className="card-title">Payment</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className='col-md-3 d-flex justify-content-center '>
                                    <Link to={"paymentLanding"}>
                                        <div className="card shadow bg-warning h-100" style={{ width: "12rem", alignItems: "center" }}>
                                            <img src={Payment} className="card-img-top mt-2 w-50 h-40" alt="..." />
                                            <div className="card-body text-white">
                                                <h5 className="card-title">Courses</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className='col-md-3 d-flex justify-content-center '>
                                    <Link to={"paymentLanding"}>
                                        <div className="card shadow bg-warning h-100" style={{ width: "12rem", alignItems: "center" }}>
                                            <img src={Payment} className="card-img-top mt-2 w-50 h-40" alt="..." />
                                            <div className="card-body text-center text-white">
                                                <h5 className="card-title">Student Management</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className='col-md-3 d-flex justify-content-center '>
                                    <Link to={"paymentLanding"}>
                                        <div className="card shadow bg-warning h-100" style={{ width: "12rem", alignItems: "center" }}>
                                            <img src={Payment} className="card-img-top mt-2 w-50 h-40" alt="..." />
                                            <div className="card-body text-white">
                                                <h5 className="card-title">Classes</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='row mt-5'>
                            <div className='col-md-3 d-flex justify-content-center mt-5'>
                            <Link to={"paymentLanding"}>
                                        <div className="card shadow bg-warning h-100" style={{ width: "12rem", alignItems: "center" }}>
                                            <img src={Payment} className="card-img-top mt-2 w-50 h-40" alt="..." />
                                            <div className="card-body text-white">
                                                <h5 className="card-title">Payment</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className='col-md-3 d-flex justify-content-center mt-5'>
                                    <Link to={"paymentLanding"}>
                                        <div className="card shadow bg-warning h-100" style={{ width: "12rem", alignItems: "center" }}>
                                            <img src={Payment} className="card-img-top mt-2 w-50 h-40" alt="..." />
                                            <div className="card-body text-white">
                                                <h5 className="card-title">Payment</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className='col-md-3 d-flex justify-content-center mt-5'>
                                    <Link to={"paymentLanding"}>
                                        <div className="card shadow bg-warning h-100" style={{ width: "12rem", alignItems: "center" }}>
                                            <img src={Payment} className="card-img-top mt-2 w-50 h-40" alt="..." />
                                            <div className="card-body text-white">
                                                <h5 className="card-title">Payment</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className='col-md-3 d-flex justify-content-center mt-5'>
                                    <Link to={"paymentLanding"}>
                                        <div className="card shadow bg-warning h-100" style={{ width: "12rem", alignItems: "center" }}>
                                            <img src={Payment} className="card-img-top mt-2 w-50 h-40" alt="..." />
                                            <div className="card-body text-white">
                                                <h5 className="card-title">Payment</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default AppLanding