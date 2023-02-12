import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function UserFooter() {
    const navigate = useNavigate();
    return (
        <div>
            <div>
                <div className="container footer-container">
                    <div className="footer-sec d-flex text-center justify-content-between align-items-center">
                        <div className="footer-item" onClick={() => { navigate("/shop") }}>
                            <i className="fa fa-home" aria-hidden="true"></i><br />
                            <h6 className='text-secondary fw-bold'>Home</h6>
                        </div>
                        <div className="footer-item" onClick={() => { navigate("/cart") }}>
                        <i class="fa fa-shopping-cart" aria-hidden="true"></i><br />
                            <h6 className='text-secondary fw-bold'>Cart</h6>
                        </div>
                        <div className="footer-item" onClick={() => { navigate("/usersetting") }}>
                            <i className="fa fa-user" aria-hidden="true"></i><br />
                            <h6 className='text-secondary fw-bold'>Account</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
