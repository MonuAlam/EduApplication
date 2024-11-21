import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

function ClassHome() {
    const [datas, setdata] = useState([]);
    const myapi = () => {
        axios.get("https://fakestoreapi.com/products").then((d) => {
            //console.log(d.data);
            setdata(d.data);
        })
    }

    useEffect(() => {
        myapi();
    }, [])
    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    {datas.map((apidata) => {
                        return (
                            <div className="col-md-4 mb-4" >
                                <div className="card h-100 d-flex flex-column"> 
                                    <img
                                        src={apidata.image}
                                        className="card-img-top"
                                        alt={apidata.title}
                                        style={{
                                            height: '200px',
                                        }}
                                    />
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title text-capitalize">{apidata.title}</h5>
                                        <h4 className="text-success">{apidata.price}$</h4>
                                        <p className="text-muted mb-3">
                                            Rating: {apidata.rating.rate} ★ ({apidata.rating.count} reviews)
                                        </p>
                                        <div className="mt-auto">
                                            <Link to={"detailpage/"+apidata.id} className="btn btn-primary w-100">Details</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Fragment>
    )
}

export default ClassHome