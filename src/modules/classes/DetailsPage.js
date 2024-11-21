import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function DetailsPage() {

    const { id } = useParams();
    console.log(id);

    const [singeldata, setsingeldata] = useState({});

    const myapi = () => {
        axios.get(`https://fakestoreapi.com/products/${id}`).then((d) => {
            setsingeldata(d.data);
        });
    }

    useEffect(() => {
        myapi();
    }, []);
    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div class="card mb-3">
                        <img src={singeldata.image} class="card-img-top align-self-center" alt="..." style={{height:"200px",width:"200px"}}/>
                            <div class="card-body">
                                <h5 class="card-title">{singeldata.title}</h5>
                                <h4 class="card-title text-success">{singeldata.price}$</h4>
                                <p class="card-text">{singeldata.description}</p>
                                {singeldata.rating ? (
                                <p className="card-text">
                                    <small className="text-body-secondary">
                                        Rating {singeldata.rating.rate} ★ {singeldata.rating.count} reviews
                                    </small>
                                </p>
                            ) : (
                                <p className="card-text">Rating not available</p>
                            )}
                            </div>
                    </div>
                    

                </div>
            </div>

        </Fragment>
    )
}

export default DetailsPage