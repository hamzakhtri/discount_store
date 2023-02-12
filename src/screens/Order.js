import React from 'react'
import AdminNavbar from '../components/AdminNavbar'
import Footer from '../components/Footer'

export default function Order() {
    return (
        <div>
            <AdminNavbar />

            <div className="order-page">
                <div className="order-sec container">
                    <h6 className='my-2 blue-text fw-bold'>Orders</h6>
                    <div className="orders d-flex justify-content-between align-items-center">
                        <div className="user-bio">
                            <p className='m-0 fw-bold'>Inzmam Malik</p>
                            <small>Just Now - Pending</small>
                            <div className="p-items mt-3">
                                <small className='text-secondary'>2 x ITEM NAME</small><br />
                                <small className='text-secondary'>3 x ITEM NAME</small>
                            </div>
                            <p>Total</p>
                        </div>
                        <div className="userdata">
                            <p className="number fw-bold">03022004480</p>
                            <p className="price green-text fw-bold">$2.1</p>
                        </div>
                    </div>
                    <div class="input-group">
                        <select class="form-control mb-2 border-0 bg-secondary text-light" id="class-schedule">
                            <option class="hidden" selected disabled>Change status
                            </option>
                            <option value="fruit">Fruits</option>
                        </select>
                    </div>
                </div>

                <div className="order-sec container">
                    <h6 className='my-2 blue-text fw-bold'>Orders</h6>
                    <div className="orders d-flex justify-content-between align-items-center">
                        <div className="user-bio">
                            <p className='m-0 fw-bold'>Inzmam Malik</p>
                            <small>Just Now - Pending</small>
                            <div className="p-items mt-3">
                                <small className='text-secondary'>2 x ITEM NAME</small><br />
                                <small className='text-secondary'>3 x ITEM NAME</small>
                            </div>
                            <p>Total</p>
                        </div>
                        <div className="userdata">
                            <p className="number fw-bold">03022004480</p>
                            <p className="price green-text fw-bold">$2.1</p>
                        </div>
                    </div>
                    <div class="input-group">
                        <select class="form-control mb-2 border-0 bg-secondary text-light" id="class-schedule">
                            <option class="hidden" selected disabled>Change status
                            </option>
                            <option value="fruit">Fruits</option>
                        </select>
                    </div>
                </div>
            </div>

            <Footer />

        </div>
    )
}
