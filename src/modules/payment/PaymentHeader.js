import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

function PaymentHeader() {
  return (
<Fragment>
<nav className="navbar navbar-expand-lg bg-warning fixed-top">
  <div className="container-fluid">
    <Link className="navbar-brand" to={"/applanding"}>EduApp</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse"  id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={""}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to={"upipayment"}>UPI</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to={"visapayment"}>VISA</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to={"paypalpayment"}>PayPal</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to={"cashpayment"}>Cash</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-info" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</Fragment>
)
}

export default PaymentHeader