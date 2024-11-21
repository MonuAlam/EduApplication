import React, { Fragment } from 'react';
import Payment from "../../image/payment.png";
import Courses from "../../image/cources.png";
import Fees from "../../image/fees.png";
import Classes from "../../image/classes.png";
import Students from "../../image/students.png";
import Teachers from "../../image/teachers.png";
import Notes from "../../image/notes.png";
import Events from "../../image/events.png";


import { Link } from 'react-router-dom'
function AppLanding() {
    return (
        <Fragment>
            <div className='container-fluid'>
                <div className='row justify-content-center' style={{ minHeight: "100vh" }}>
                    <div className='col-12 align-self-center'>
                        <div className='container-fluid '>
                            <div className='row'>
                                <div className='col-md-6 col-xl-3 mt-5 d-flex justify-content-center '>
                                    <Link to={"paymentLanding"}>
                                        <div className="card shadow bg-warning h-100" style={{ width: "18rem", alignItems: "center" }}>
                                            <img src={Payment} className="card-img-top mt-2 w-50 h-40" alt="..." />
                                            <div className="card-body text-white">
                                                <h5 className="card-title">Payment</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className='col-md-6 col-xl-3 mt-5 d-flex justify-content-center '>
                                    <Link to={"courceLanding"}>
                                        <div className="card shadow bg-warning h-100" style={{ width: "18rem", alignItems: "center" }}>
                                            <img src={Courses} className="card-img-top mt-2 w-50 h-40" alt="..." />
                                            <div className="card-body text-white">
                                                <h5 className="card-title">Courses</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className='col-md-6 col-xl-3 mt-5 d-flex justify-content-center '>
                                    <Link to={"feesLanding"}>
                                        <div className="card shadow bg-warning h-100" style={{ width: "18rem", alignItems: "center" }}>
                                            <img src={Fees} className="card-img-top mt-2 w-50 h-40" alt="..." />
                                            <div className="card-body text-center text-white">
                                                <h5 className="card-title">Fees Dashboard</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className='col-md-6 col-xl-3 mt-5 d-flex justify-content-center '>
                                    <Link to={"classesLanding"}>
                                        <div className="card shadow bg-warning h-100" style={{ width: "18rem", alignItems: "center" }}>
                                            <img src={Classes} className="card-img-top mt-2 w-50 h-40" alt="..." />
                                            <div className="card-body text-white">
                                                <h5 className="card-title">Classes / Products</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='row '>
                                <div className='col-md-6 col-xl-3 mt-5 d-flex justify-content-center '>
                                    <Link to={"studentLanding"}>
                                        <div className="card shadow bg-warning h-100" style={{ width: "18rem", alignItems: "center" }}>
                                            <img src={Students} className="card-img-top mt-2 w-50 h-40" alt="..." />
                                            <div className="card-body text-white">
                                                <h5 className="card-title">Students Management</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className='col-md-6 col-xl-3 mt-5 d-flex justify-content-center '>
                                    <Link to={"teacherLanding"}>
                                        <div className="card shadow bg-warning h-100" style={{ width: "18rem", alignItems: "center" }}>
                                            <img src={Teachers} className="card-img-top mt-2 w-50 h-40" alt="..." />
                                            <div className="card-body text-white">
                                                <h5 className="card-title">Teachers Management</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className='col-md-6 col-xl-3 mt-5 d-flex justify-content-center '>
                                    <Link to={"notestLanding"}>
                                        <div className="card shadow bg-warning h-100" style={{ width: "18rem", alignItems: "center" }}>
                                            <img src={Notes} className="card-img-top mt-2 w-50 h-40" alt="..." />
                                            <div className="card-body text-center text-white">
                                                <h5 className="card-title">Notes</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className='col-md-6 col-xl-3 mt-5 d-flex justify-content-center '>
                                    <Link to={"eventLanding"}>
                                        <div className="card shadow bg-warning h-100" style={{ width: "18rem", alignItems: "center" }}>
                                            <img src={Events} className="card-img-top mt-2 w-50 h-40" alt="..." />
                                            <div className="card-body text-white">
                                                <h5 className="card-title">Events</h5>
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