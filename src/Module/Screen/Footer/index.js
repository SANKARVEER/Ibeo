import React from 'react'
import './index.css'

function Footer() {
    return (
        <>
            <footer className="footer " style={{ backgroundColor: '#005f5b' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-4 mt-4 col-lg-3 text-center text-sm-start">
                            <div className="information">
                                <h6 className="footer-heading text-uppercase text-white fw-bold">About Us</h6>
                                <ul className="list-unstyled footer-link mt-4">
                                    <li className="mb-1"><a href="https://codepen.io/Gaurav-Rana-the-reactor" className="text-white text-decoration-none fw-semibold">Events</a></li>
                                    <li className="mb-1"><a href="https://codepen.io/Gaurav-Rana-the-reactor" className="text-white text-decoration-none fw-semibold">Our Team</a></li>
                                    <li className="mb-1"><a href="https://codepen.io/Gaurav-Rana-the-reactor" className="text-white text-decoration-none fw-semibold">Upcoming Sale</a></li>
                                    <li className=""><a href="https://codepen.io/Gaurav-Rana-the-reactor" className="text-white text-decoration-none fw-semibold">New Launches</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 mt-4 col-lg-3 text-center text-sm-start">
                            <div className="resources">
                                <h6 className="footer-heading text-uppercase text-white fw-bold">Resources</h6>
                                <ul className="list-unstyled footer-link mt-4">
                                    <li className="mb-1"><a href="https://codepen.io/Gaurav-Rana-the-reactor" className="text-white text-decoration-none fw-semibold">API</a></li>
                                    <li className="mb-1"><a href="https://codepen.io/Gaurav-Rana-the-reactor" className="text-white text-decoration-none fw-semibold">Website Tutorials</a></li>
                                    <li className="mb-1"><a href="https://codepen.io/Gaurav-Rana-the-reactor" className="text-white text-decoration-none fw-semibold">Third Party</a></li>
                                    <li className=""><a href="https://codepen.io/Gaurav-Rana-the-reactor" className="text-white text-decoration-none fw-semibold">Video Lectures</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-6 mt-4 col-lg-4 text-center text-sm-start">
                            <div className="contact">
                                <h6 className="footer-heading text-uppercase text-white fw-bold">Contact Us</h6>
                                <address className="mt-4 m-0 text-white mb-1"><i className="bi bi-pin-map fw-semibold"></i> New South Block , Phase 8B , 160055</address>
                                <a href="tel:+" className="text-white mb-1 text-decoration-none d-block fw-semibold"><i className="bi bi-telephone"></i>  909090XXXX</a>
                                <a href="mailto:" className="text-white mb-1 text-decoration-none d-block fw-semibold"><i className="bi bi-envelope"></i> xyzdemomail@gmail.com</a>
                                <a href="" className="text-white text-decoration-none fw-semibold"><i className="bi bi-skype"></i> xyzdemomail</a>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 mt-4 col-lg-2 text-center text-sm-start">
                            <div className="social">
                                <h6 className="footer-heading text-uppercase text-white fw-bold">Social</h6>
                                <div className="row">
                                    <div className="col-md-2 mb-2">
                                        <a href="#" className="text-white btn-sm btn mb-2" >
                                            <i className="fa-brands fa-facebook-f" style={{height:'10px',width:'10px'}}></i>
                                        </a>
                                    </div>
                                    <div className="col-md-2 mb-2">
                                        <a href="#" className="text-white btn-sm btn mb-2">
                                            <i className="fa-brands fa-twitter" style={{height:'10px',width:'10px'}}></i>
                                        </a>
                                    </div>
                                    <div className="col-md-2 mb-2">
                                        <a href="#" className="text-white btn-sm btn  mb-2">
                                            <i className="fa-brands fa-instagram" style={{height:'10px',width:'10px'}}></i>
                                        </a>
                                    </div>
                                    <div className="col-md-2 mb-2">
                                        <a href="#" className="text-white btn-sm btn  mb-2">
                                            <i className="fa-brands fa-linkedin-in" style={{height:'10px',width:'10px'}}></i>
                                        </a>
                                    </div>
                                    {/* <div className="col-md-2 mb-2">
                                        <a href="#" className="text-white btn-sm btn mb-2">
                                            <i className="fa-brands fa-pinterest-p" style={{height:'10px',width:'10px'}}></i>
                                        </a>
                                    </div> */}
                                </div>
                                {/* <ul className="list-inline my-4">
                                    <li>
                                        <a href="#" class="text-white btn-sm btn btn-success mb-2">
                                            <i class="fa-brands fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="text-white btn-sm btn btn-success mb-2">
                                            <i class="fa-brands fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>

                                        <a href="#" class="text-white btn-sm btn btn-success mb-2">
                                            <i class="fa-brands fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="text-white btn-sm btn btn-success mb-2">
                                            <i class="fa-brands fa-linkedin-in"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="text-white btn-sm btn btn-success mb-2">
                                            <i class="fa-brands fa-pinterest-p"></i>
                                        </a>
                                    </li>
                                </ul> */}
                                {/* <li className="list-inline-item"><a href="https://codepen.io/Gaurav-Rana-the-reactor" className="text-white btn-sm btn btn-primary mb-2"><i className="bi bi-facebook"></i></a></li>
                                    <li className="list-inline-item"><a href="https://codepen.io/Gaurav-Rana-the-reactor" className="text-danger btn-sm btn btn-light mb-2"><i className="bi bi-instagram"></i></a></li>
                                    <li className="list-inline-item"><a href="https://codepen.io/Gaurav-Rana-the-reactor" className="text-white btn-sm btn btn-primary mb-2"><i className="bi bi-twitter"></i></a></li>
                                    <li className="list-inline-item"><a href="https://codepen.io/Gaurav-Rana-the-reactor" className="text-white btn-sm btn btn-success mb-2"><i className="bi bi-whatsapp"></i></a></li> */}

                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center bg-dark text-white mt-4 p-1">
                    <p className="mb-0 fw-bold">2007 © Ibea, All Rights Reserved</p>
                </div>
            </footer>
        </>
    )
} export { Footer }
