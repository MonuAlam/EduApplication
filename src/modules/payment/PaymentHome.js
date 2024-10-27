import React, { Fragment, useEffect, useState } from 'react';

const Counter = ({ endValue, duration = 3500 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = endValue / (duration / 16);
    const interval = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        clearInterval(interval);
        setCount(endValue);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(interval);
  }, [endValue, duration]);

  return <span>{count}</span>;
};

function PaymentHome() {
  const payhomedata = [
    { amount: 100, amountSufix: "K", mode: "Online UPI" },
    { amount: 10, amountSufix: "K", mode: "VISA Payment" },
    { amount: 20, amountSufix: "K", mode: "PayPal Payment" },
    { amount: 12, amountSufix: "K", mode: "Cash Payment" }
  ];

  return (
    <Fragment>
      <div className="container" style={{ marginTop: "90px", marginBottom: "20px" }}>
        <div className="row g-4 align-self-center">
          {payhomedata.map((c, index) => (
            <div key={index} className="col-sm-6 col-xl-3">
              <div className="d-flex justify-content-center align-items-center p-4 bg-warning bg-opacity-15 rounded-3" style={{ height: "200px" }}>
                <span className="display-6 lh-1 text-warning mb-0">
                </span>
                <div className="ms-4 h6 fw-normal mb-0">
                  <div className="d-flex">
                    <h5 className="purecounter mb-0 fw-bold">
                      <Counter endValue={c.amount} />
                    </h5>
                    <span className="mb-0 h5">{c.amountSufix}</span>
                  </div>
                  <p className="mb-0">{c.mode}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default PaymentHome;
