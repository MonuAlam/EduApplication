import React, { Fragment } from 'react'; 
import { mydata } from './Mydata'; 
import { Link } from 'react-router-dom';

function LazyClass() {
    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    {mydata.map((apidata) => {
                        return (
                            <div className="col-md-4 mb-4" key={apidata.id}>
                                <div className="card h-100 d-flex flex-column">
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title text-capitalize">Order ID: {apidata.id}</h5>
                                        <h4 className="text-success">User ID: {apidata.userId}</h4>
                                        <p className="text-muted mb-3">Date: {new Date(apidata.date).toLocaleDateString()}</p>
                                        
                                        <h6>Products:</h6>
                                        <ul className="list-group list-group-flush">
                                            {apidata.products.map((product) => {
                                                return (
                                                    <li  className="list-group-item">
                                                        Product ID: {product.productId}, Quantity: {product.quantity}
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Fragment>
    );
}

export default LazyClass;
