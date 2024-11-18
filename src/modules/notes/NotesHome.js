import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function NotesHome() {

    const [myData, myUpdateData] = useState([]);

    const myApi = () => {
        fetch('https://jsonplaceholder.typicode.com/posts').then((data) => {

            return data.json();
        }).then((mydata) => {
            console.log(mydata);
            myUpdateData(mydata);
        })
    }

    useEffect(() => {
        myApi();
    }, [])


    return (
        <Fragment>
            <div className='container'>
                <div className='row mt-5'>
                    {
                        myData.map((mapdata) => {
                            return (

                                <div className='col-md-4 mt-3 mb-3 '>
                                    {mapdata.id%2 == 0 ?
                                        <div className="card bg-info h-100">
                                            <div className="card-body ">
                                                <Link  className="btn btn-warning">{mapdata.id}</Link>
                                                <h5 className='card-title text-capitalize mt-2'>{mapdata.title}</h5>
                                                <p className="card-text text-capitalize">{mapdata.body}</p>

                                            </div>
                                        </div>

                                        :
                                        <div className="card bg-warning h-100">
                                            <div className="card-body ">
                                                <Link className="btn btn-info">{mapdata.id}</Link>
                                                <h5 className='card-title text-capitalize mt-2'>{mapdata.title}</h5>
                                                <p className="card-text text-capitalize">{mapdata.body}</p>

                                            </div>
                                        </div>
                                    }
                                </div>

                            )
                        })
                    }
                </div>
            </div>

        </Fragment>
    )
}

export default NotesHome