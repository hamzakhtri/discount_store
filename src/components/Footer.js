import React from 'react'

export default function Footer() {
    return (
        <div>
            <div className="container footer-container">
                <div className="footer-sec d-flex text-center justify-content-between align-items-center">
                    <div className="footer-item">
                        <i className="fa fa-home" aria-hidden="true"></i><br />
                        <h6 className='text-secondary fw-bold'>Home</h6>
                    </div>
                    <div className="footer-item">
                    <i className="fa fa-plus-circle" aria-hidden="true"></i><br />
                        <h6 className='text-secondary fw-bold'>Add item</h6>
                    </div>
                    <div className="footer-item">
                        <i className="fa fa-user" aria-hidden="true"></i><br />
                        <h6 className='text-secondary fw-bold'>Account</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}
