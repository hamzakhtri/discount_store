import React from 'react'
import AdminNavbar from '../components/AdminNavbar'
import Footer from '../components/Footer'


export default function AddItem() {
    return (
        <>
            <AdminNavbar />
            <div className="container mb-5 addItemSec">
                <p className="fs-6 mt-5 ms-2" style={{ color: "#024F9D" }}>Add New Items</p>
                <div className="container">
                    <div className="signup-form w-75 mx-auto mt-4">
                        <div className="input-fields">
                            <div className="input-group">
                                <input className="form-control border-end-0 border rounded-pill" type="text" placeholder="Product Name" id="product" />
                            </div>
                            <div className="input-group" style={{ border: "1px solid grey" }}>
                                <textarea className="form-control " type="text" placeholder="Product Description" id="productDesc" />
                            </div>

                            <div class="input-group">
                                <select class="form-control mb-2 border-0" id="class-schedule">
                                    <option class="hidden" selected disabled>Select Category
                                    </option>
                                    <option value="fruit">Fruits</option>
                                </select>
                            </div>
                            <div className="input-group">
                                <input className="form-control border-end-0 border rounded-pill" type="text" placeholder="Unit Name" id="product" />
                            </div>
                            <div className="input-group">
                                <input className="form-control border-end-0 border rounded-pill" type="text" placeholder="Unit Price" id="product" />
                            </div>
                            <div className="mb-3" style={{ border: "2px solid grey" }}>
                                <input className="form-control" type="file" id="product-img" />
                            </div>
                        </div>
                        <div className="signup-btn text-center">
                            <button className='btn btn-primary theme-btn mt-3 fw-bold px-4 shadow'>Add Product</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
