import React, { Fragment, useState, useEffect } from 'react';
import { FaCcPaypal } from "react-icons/fa6";
import Paypal from "../../image/paypal.png";

function PaypalPayment() {
  const [showQR, setShowQR] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handlePayClick = () => {
    setShowQR(true);
  };

  const updateMargin = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    updateMargin();
    window.addEventListener('resize', updateMargin);
    return () => window.removeEventListener('resize', updateMargin);
  }, []);

  return (
    <Fragment>
      <div className="container-fluid bg-light min-vh-100 d-flex justify-content-center align-items-center">
        <div className={`col-md-6 ${isMobile ? 'mt-5' : 'mt-0'}`} style={{ maxWidth: "800px" }}>
          <div className="container-fluid">
            <div className="row">

            <div className={`col-md-4 text-center bg-warning align-self-center py-4 ${isMobile ? 'mt-4' : 'mt-0'}`} style={{ maxWidth: "800px" }}>
            <main className="form-signin w-100 m-auto">
                  <form>
                    <p className="">
                      <FaCcPaypal style={{ height: "80px", width: "80px" }} />
                    </p>
                    <div className="form-floating ">
                      <input type="text" className="form-control" placeholder="Name" required />
                      <label >PayPal Id</label>
                    </div>
                    <div className="form-floating mt-2">
                      <input type="text" className="form-control"  placeholder="Card Number" required />
                      <label >Card Number</label>
                    </div>
                    <div className="form-floating mt-2">
                      <input type="text" className="form-control"  placeholder="Expiration(MM/YY)" required />
                      <label >Expiration(MM/YY)</label>
                    </div>
                    <div className="form-floating mt-2">
                      <input type="text" className="form-control"  placeholder="Security Code" required />
                      <label >Security Code</label>
                    </div>
                    <button
                      className="btn btn-primary w-100 py-2 mt-3"
                      type="button"
                      onClick={handlePayClick}
                    >
                      Pay
                    </button>
                  </form>
                </main>
              </div>
              {/* <div className="col-md-8 bg-info text-center d-flex justify-content-center align-items-center"> */}
              <div className={`col-md-8 bg-info text-center d-flex justify-content-center align-items-center ${isMobile ? 'mt-4 mb-4' : 'mt-0'}`} >
                {showQR && (
                  /* <p className='h2 text-success'>Paymet Succcessfull</p>  */
                  <img src={Paypal} className="card-img-top w-50 h-40" alt="QR Code" />

                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default PaypalPayment