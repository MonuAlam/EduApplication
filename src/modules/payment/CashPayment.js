import React, { Fragment, useState, useEffect } from 'react';
import { FaIndianRupeeSign } from "react-icons/fa6";
import Cash from "../../image/cash.png";

function CashPayment() {
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

              {/* <div className="col-md-4 text-center bg-warning align-self-center py-4"> */}
              <div className={`col-md-4 text-center bg-warning align-self-center py-4 ${isMobile ? 'mt-4' : 'mt-0'}`} style={{ maxWidth: "800px" }}>

                <main className="form-signin w-100 m-auto">
                  <form>
                    <p className="">
                      <FaIndianRupeeSign style={{ height: "80px", width: "80px" }} />
                    </p>
                    <div className="form-floating ">
                      <input type="text" className="form-control" placeholder="Name" required />
                      <label >Customer Name</label>
                    </div>
                    <div className="form-floating mt-2">
                      <input type="text" className="form-control"  placeholder="Card Number" required />
                      <label >Amount</label>
                    </div>
                    <div className="form-floating mt-2">
                      <input type="date" className="form-control"  placeholder="Payment Date(DD/MM/YY)" required />
                      <label >Payment Date</label>
                    </div>
                    <div className="form-floating mt-2">
                      <input type="text" className="form-control"  placeholder="Collected By" required />
                      <label >Payment Collected By</label>
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
                  <img src={Cash} className="card-img-top w-50 h-40" alt="QR Code" />

                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}


export default CashPayment