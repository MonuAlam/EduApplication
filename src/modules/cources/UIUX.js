import React, { Fragment } from 'react'
import Mkt from "../../image/mkt.jpg"
import Graphic from "../../image/graphic.jpg"
import Figma from "../../image/figma.jpg"
import { MdCurrencyRupee } from "react-icons/md";

function UIUX() {
  const uiux = [
    {
      img: Mkt,
      cardTitl: "UI/UX Designer",
      price:12000,
      durations: "8h 20m",
      lectures: "20 lectures"
    },
   
    {
      img: Graphic,
      cardTitl: "Learn Graphic",
      price:13000,
      durations: "1h 20m",
      lectures: "5 lectures"
    },
    {
      img: Figma,
      cardTitl: "Learn Figma",
      price:10000,
      durations: "3h 22m",
      lectures: "13 lectures"
    }
  ];
  return (
    <Fragment>
 <div className="album py-5 bg-body-tertiary">
                <div className="container mt-5">

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {
                          uiux.map((c) => {
                                return (
                                    <div className="col">
                                        <div className="card shadow-sm ">
                                            <img src={c.img} className="card-img-top w-100 h-100" alt="QR Code" />
                                            <div className="card-body">
                                                <p className="card-text h4">{c.cardTitl}</p>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="btn-group mt-3">
                                                        <button type="button" className="btn btn-sm btn-outline-info">Enroll</button>
                                                        <button type="button" className="btn btn-sm btn-outline-warning"><MdCurrencyRupee className='text-danger'/>{c.price}</button>
                                                    </div>
                                                    <div className="btn-group mt-3">
                                                        <button type="button" className="btn btn-sm btn-outline-info">{c.durations}</button>
                                                        <button type="button" className="btn btn-sm btn-outline-warning">{c.lectures}</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                )
                            })

                        }

                    </div>
                </div>
            </div>
    </Fragment>
  )
}

export default UIUX