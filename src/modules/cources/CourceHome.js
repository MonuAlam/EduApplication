import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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

function CourseHome() {
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
      chead: "Web Design",
      cpaced: 100,
      listItems: ["User-Centric Design", "Visual Hierarchy and Consistency", "Responsive and Mobile-First Design", "Optimized Performance"],
      navig: "webdesign",
      btncolor: "btn-outline-info",
      btncontent: "Get Started",
    },
    {
      headcolor: "text-bg-warning",
      chead: "Development",
      cpaced: 50,
      listItems: ["User-Centric Design", "Visual Hierarchy and Consistency", "Responsive and Mobile-First Design", "Optimized Performance"],
      navig: "development",
      btncolor: "btn-outline-warning",
      btncontent: "Get Started",
    },
    {
      headcolor: "text-bg-info",
      chead: "Marketing",
      cpaced: 50,
      listItems: ["User-Centric Design", "Visual Hierarchy and Consistency", "Responsive and Mobile-First Design", "Optimized Performance"],
      navig: "marketing",
      btncolor: "btn-outline-info",
      btncontent: "Get Started",
    },
    {
      headcolor: "text-bg-warning",
      chead: "UI/UX Design",
      cpaced: 100,
      listItems: ["User-Centric Design", "Visual Hierarchy and Consistency", "Responsive and Mobile-First Design", "Optimized Performance"],
      navig: "uiux",
      btncolor: "btn-outline-warning",
      btncontent: "Get Started",
    },
  ];

  return (
    <Fragment>
      <main style={{ marginTop: isMobile ? "100px" : "150px" }}>
        <div className="row row-cols-1 row-cols-md-4 text-center" style={{ marginInline: "4px" }}>
          {courcehome.map((c, index) => (
            <div className="col" key={index}>
              <div className="card mb-4 rounded-3 shadow-sm">
                <div className={`card-header py-3 ${c.headcolor}`}>
                  <h4 className="my-0 fw-normal">{c.chead}</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">
                    <Counter endValue={c.cpaced} />+
                    <small className="text-body-secondary fw-light">/Jobs</small>
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

export default CourseHome;
