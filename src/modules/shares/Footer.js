import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineCastForEducation } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
    return (
        <Fragment>
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3  border-top bg-info">
                <div className="col-md-4 d-flex align-items-center">
                    <Link to={""} className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                    <MdOutlineCastForEducation style={{ height: "50px", width: "50px" }} />
                    </Link>
                    <span className="mb-3 mb-md-0 text-body-secondary">© 2024 EduApp, India</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><Link className="text-body-secondary" to={"https://www.instagram.com/"}><FaInstagram style={{ height: "50px", width: "50px" }} /></Link></li>
                    <li className="ms-3"><Link className="text-body-secondary" to={"https://www.facebook.com/"}><CiFacebook style={{ height: "50px", width: "50px" }} /></Link></li>
                    <li className="ms-3"><Link className="text-body-secondary" to={"https://www.twitter.com/"}><CiTwitter style={{ height: "50px", width: "50px" }} /></Link></li>
                    <li className="ms-3"><Link className="text-body-secondary" to={"https://www.whatsapp.com/"}><FaWhatsapp style={{ height: "50px", width: "50px" }} /></Link></li>
                </ul>
            </footer>
        </Fragment>
    )
}

export default Footer