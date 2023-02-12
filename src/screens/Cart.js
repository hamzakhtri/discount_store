import React from 'react'
import UserFooter from '../components/UserFooter'
import avatar from '../images/admin-avatar.png'
import cartimg1 from '../images/cart-img.png'
import cartimg2 from '../images/cart-img2.png'


export default function Cart() {
    return (
        <div>
            <div className="container mt-3 cart-page">
                <div className="d-flex justify-content-end">
                    <img src={avatar} alt="" width={50} />
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="info">
                        <h5 className='blue-text m-0'>Shopping</h5>
                        <p className='fw-bold green-text'>Cart</p>
                    </div>
                    <div className="del-icon">
                        <i className="fa fa-trash green-text" aria-hidden="true"></i>
                    </div>
                </div>

                <div className="cart-product">
                    <div className="hp-card d-flex border-0 justify-content-between align-items-center mb-3">
                        <div className="p-img">
                            <img src={cartimg1} className="img-fluid" alt="" width={100} />
                        </div>
                        <div className="p-info">
                            <p className='green-text fw-bold'>Apple</p>
                            <p className='text-secondary fw-bold'>1.kg</p>
                        </div>
                        <div className="p-counter">
                            <p className='green-text fw-bold'>Qty</p>
                            <input type="number" className='qty-field' />
                        </div>
                        <div className="p-price">
                            <p className="text-secondary fw-bold">$2.1</p>
                        </div>
                    </div>
                </div>

                <div className="cart-product">
                    <div className="hp-card d-flex border-0 justify-content-between align-items-center mb-4">
                        <div className="p-img">
                            <img src={cartimg2} className="img-fluid" alt="" width={100} />
                        </div>
                        <div className="p-info">
                            <p className='green-text fw-bold'>Apple</p>
                            <p className='text-secondary fw-bold'>1.kg</p>
                        </div>
                        <div className="p-counter">
                            <p className='green-text fw-bold'>Qty</p>
                            <input type="number" className='qty-field' />
                        </div>
                        <div className="p-price">
                            <p className="text-secondary fw-bold">$2.1</p>
                        </div>
                    </div>

                    <div className="hp-card d-flex border-0 justify-content-between align-items-center mb-4">
                        <div className="p-img">
                            <img src={cartimg2} className="img-fluid" alt="" width={100} />
                        </div>
                        <div className="p-info">
                            <p className='green-text fw-bold'>Apple</p>
                            <p className='text-secondary fw-bold'>1.kg</p>
                        </div>
                        <div className="p-counter">
                            <p className='green-text fw-bold'>Qty</p>
                            <input type="number" className='qty-field' />
                        </div>
                        <div className="p-price">
                            <p className="text-secondary fw-bold">$2.1</p>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between align-items-center mt-5 px-5">
                        <p className='fw-bold'>Total</p>
                        <p className='fw-bold green-text'>$185</p>
                    </div>

                    <div className="cart-form px-5 mx-auto mt-5">
                        <div className="input-fields">
                            <div className="input-group">
                                <input className="form-control border-end-0 border rounded-pill" type="text" placeholder="Full Name" id="fullName" />
                            </div>
                            <div className="input-group">
                                <input className="form-control border-end-0 border rounded-pill" type="text" placeholder="Contact" id="contact" />
                            </div>
                            <div className="input-group">
                                <input className="form-control border-end-0 border rounded-pill" type="text" placeholder="Email" id="email" />
                            </div>
                            <div className="input-group">
                                <input className="form-control border-end-0 border rounded-pill" type="text" placeholder="Shipping Address" id="psw" />
                            </div>
                        </div>
                        <div className="signup-btn text-center mb-5">
                            <button className='btn btn-primary theme-btn mt-3 fw-bold px-3 shadow'>Place Order</button>
                        </div>
                    </div>
                </div>
            </div>

            <UserFooter />

        </div>
    )
}
