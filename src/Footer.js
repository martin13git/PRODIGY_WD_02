import React from 'react'

export default function Footer() {
    return (
        <>
            <div className='footer-area'>
                <div className='footer'>
                    <div className='footer-brand'>
                        <div className="footer-img d-flex flex-column">
                            <img src="/logo192.png" alt="" width="100" height="auto" className="d-inline-block" />
                            <a className="foot-brand" href="/">
                            </a>
                        </div>

                    </div>

                    <div className='footer-content'>
                        <div className="contact-info">
                            <h3>Get in Touch</h3>
                            <div className="contact-item">
                                <i className="fas fa-map-marker-alt"></i>
                                <div>
                                    <h5>123 Main Street,</h5>
                                    <h5>Anytown, CA 12345</h5>
                                    <h5>USA</h5>
                                </div>
                            </div>
                            <div className="contact-item">
                                <i className="fas fa-phone"></i>
                                <h6>(555) 555-1212</h6>
                            </div>
                            <div className="contact-item">
                                <i className="fas fa-envelope"></i>
                                <h6>demo@untamedvoyage.com</h6>
                            </div>
                        </div>
                    </div>

                    <div className='footer-content'>
                        <h3>Learn More</h3>
                        <p>About Us</p>
                        <p>Consult</p>
                        <p>Packages</p>
                        <p>Terms of Service</p>
                        <p>Privacy Policy</p>
                    </div>

                </div>
                <div className="footer-signature">
                    <div className='copyright-signature'>
                        <h5>&copy; 2024. All Rights Reserved. </h5>
                    </div>
                    <div className='copyright-signature'>
                        <p>Designed and Built by Martin Purification</p>
                    </div>
                </div>
                <div className="footer-signature">
                    <div className='social-links'>
                        <h4>
                            <i className="fab fa-facebook"></i>
                            <i className="fab fa-youtube"></i>
                            <i className="fab fa-linkedin"></i>
                            <i className="fab fa-instagram"></i>
                        </h4>
                    </div>
                    <div className='social-links'>
                        <p>Connect with us.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
