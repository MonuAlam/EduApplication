import React, { Fragment } from 'react'
import Python from "../../image/python.jpg"
import Angular from "../../image/angular.jpg"
import Boot from "../../image/bootstrap.jpg"
import Php from "../../image/php.jpg"
import ReactN from "../../image/react.jpg"
import Js from "../../image/js.jpg"
import Lern from "../../image/learn.jpg"
import { MdCurrencyRupee } from "react-icons/md";

function Development() {
  const development = [
    {
        img: Python,
        cardTitl: "Learn Python",
        price:12000,
        durations: "8h 20m",
        lectures: "20 lectures"
    },
    {
        img: Angular,
        cardTitl: "Learn Angular",
        price:22000,
        durations: "3h 22m",
        lectures: "13 lectures"
    },
    {
        img: Boot,
        cardTitl: "Bootstrap 5",
        price:2000,
        durations: "2h 20m",
        lectures: "9 lectures"
    },
    {
        img: Php,
        cardTitl: "Learn Php",
        price:13000,
        durations: "9h 23m",
        lectures: "15 lectures"
    },
    
    {
        img: Js,
        cardTitl: "Java Script",
        price:5000,
        durations: "11h 20m",
        lectures: "11 lectures"
    },
    {
        img: Lern,
        cardTitl: "Learn Basic",
        price:1000,
        durations: "1h 20m",
        lectures: "5 lectures"
    },
    {
        img: ReactN,
        cardTitl: "Learn ReactJS",
        price:32000,
        durations: "18h 2m",
        lectures: "21 lectures",
    }
];
  return (
<Fragment>
            <div className="album py-5 bg-body-tertiary">
                <div className="container mt-5">

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {
                          development.map((c) => {
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

export default Development