// import React, { Fragment, useEffect, useState } from 'react';

// const Counter = ({ endValue, duration = 3500 }) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let start = 0;
//     const increment = endValue / (duration / 16);
//     const interval = setInterval(() => {
//       start += increment;
//       if (start >= endValue) {
//         clearInterval(interval);
//         setCount(endValue);
//       } else {
//         setCount(Math.ceil(start));
//       }
//     }, 16);

//     return () => clearInterval(interval);
//   }, [endValue, duration]);

//   return <span>{count}</span>;
// };

// function PaymentHome() {
//   const payhomedata = [
//     { amount: 100, amountSufix: "K", mode: "Online UPI" },
//     { amount: 10, amountSufix: "K", mode: "VISA Payment" },
//     { amount: 20, amountSufix: "K", mode: "PayPal Payment" },
//     { amount: 12, amountSufix: "K", mode: "Cash Payment" }
//   ];

//   return (
//     <Fragment>
//       <div className="container" style={{ marginTop: "90px", marginBottom: "20px" }}>
//         <div className="row g-4 align-self-center">
//           {payhomedata.map((c, index) => (
//             <div key={index} className="col-sm-6 col-xl-3">
//               <div className="d-flex justify-content-center align-items-center p-4 bg-warning bg-opacity-15 rounded-3" style={{ height: "200px" }}>
//                 <span className="display-6 lh-1 text-warning mb-0">
//                 </span>
//                 <div className="ms-4 h6 fw-normal mb-0">
//                   <div className="d-flex">
//                     <h5 className="purecounter mb-0 fw-bold">
//                       <Counter endValue={c.amount} />
//                     </h5>
//                     <span className="mb-0 h5">{c.amountSufix}</span>
//                   </div>
//                   <p className="mb-0">{c.mode}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </Fragment>
//   );
// }

// export default PaymentHome;

import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdCurrencyRupee } from "react-icons/md";

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
  const [isMobile, setIsMobile] = useState(false);

  const updateMargin = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    updateMargin();
    window.addEventListener('resize', updateMargin);
    return () => window.removeEventListener('resize', updateMargin);
  }, []);

  const courcehome = [
    {
      headcolor: "text-bg-info",
      chead: "UPI",
      cpaced: 100,
      rupcolor:"text-info",
      listItems: ["Real-Time Payments", "Convenient and Easy to Use", "Secure and Regulated", "Widespread Adoption and Integration"], 
      navig: "upipayment",
      btncolor: "btn-outline-info",
      btncontent: "Get Started",
    },
    {
      headcolor: "text-bg-warning",
      chead: "VISA",
      cpaced: 50,
      rupcolor:"text-warning",
      listItems: ["Real-Time Payments", "Convenient and Easy to Use", "Secure and Regulated", "Widespread Adoption and Integration"], 
      navig: "visapayment",
      btncolor: "btn-outline-warning",
      btncontent: "Get Started",
    },
    {
      headcolor: "text-bg-info",
      chead: "PayPal",
      cpaced: 50,
      rupcolor:"text-info",
      listItems: ["Real-Time Payments", "Convenient and Easy to Use", "Secure and Regulated", "Widespread Adoption and Integration"], 
      navig: "paypalpayment",
      btncolor: "btn-outline-info",
      btncontent: "Get Started",
    },
    {
      headcolor: "text-bg-warning",
      chead: "Cash",
      cpaced: 100,
      rupcolor:"text-warning",
      listItems: ["Real-Time Payments", "Convenient and Easy to Use", "Secure and Regulated", "Widespread Adoption and Integration"], 
      navig: "cashpayment",
      btncolor: "btn-outline-warning",
      btncontent: "Get Started",
    },
  ];

  return (
    <Fragment>
      <main style={{ marginTop: isMobile ? "100px" : "150px" }}>
        <div className="row row-cols-1 row-cols-md-4 text-center" style={{ marginInline: "4px" }}>
          {
            courcehome.map((c, index) => (
            <div className="col" key={index}>
              <div className="card mb-4 rounded-3 shadow-sm">
                <div className={`card-header py-3 ${c.headcolor}`}>
                  <h4 className="my-0 fw-normal">{c.chead}</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">
                  
                    <Counter endValue={c.cpaced} />K<MdCurrencyRupee className={`${c.rupcolor}`}/>
                    {/* <small className="text-body-secondary fw-light">/Jobs</small> */}
                  </h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    {c.listItems.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <Link to={c.navig} type="button" className={`w-100 btn btn-lg ${c.btncolor}`}>
                    {c.btncontent}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </Fragment>
  );
}

export default PaymentHome;
