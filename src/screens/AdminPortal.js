import React from 'react'
import AdminNavbar from '../components/AdminNavbar'
import appleImg from '../images/apple-img.png'
import watermelon from '../images/water-mellon.png'
import mango from '../images/mango.png'
import Footer from '../components/Footer'


export default function AdminPortal() {
    return (
        <>
            <AdminNavbar />
            <div className="horizontal-card-sec container">
                <h6 className='mt-5 mb-5 blue-text fw-bold'>All Products</h6>
                <div className="hp-card d-flex justify-content-between align-items-center mb-3">
                    <div className="p-img">
                        <img src={appleImg} className="img-fluid" alt="" />
                    </div>
                    <div className="p-info">
                        <p className='green-text fw-bold'>Apple</p>
                        <p className='text-secondary fw-bold'>1.kg</p>
                    </div>
                    <div className="p-price">
                        <p className="text-secondary fw-bold">$2.1</p>
                    </div>
                </div>
                <div className="hp-card d-flex justify-content-between align-items-center mb-3">
                    <div className="p-img">
                        <img src={watermelon} className="img-fluid" alt="" />
                    </div>
                    <div className="p-info">
                        <p className='green-text fw-bold'>Apple</p>
                        <p className='text-secondary fw-bold'>1.kg</p>
                    </div>
                    <div className="p-price">
                        <p className="text-secondary fw-bold">$2.1</p>
                    </div>
                </div>
                <div className="hp-card d-flex justify-content-between align-items-center mb-3">
                    <div className="p-img">
                        <img src={mango} className="img-fluid" alt="" />
                    </div>
                    <div className="p-info">
                        <p className='green-text fw-bold'>Apple</p>
                        <p className='text-secondary fw-bold'>1.kg</p>
                    </div>
                    <div className="p-price">
                        <p className="text-secondary fw-bold">$2.1</p>
                    </div>
                </div>
                <div className="hp-card d-flex justify-content-between align-items-center mb-3">
                    <div className="p-img">
                        <img src={appleImg} className="img-fluid" alt="" />
                    </div>
                    <div className="p-info">
                        <p className='green-text fw-bold'>Apple</p>
                        <p className='text-secondary fw-bold'>1.kg</p>
                    </div>
                    <div className="p-price">
                        <p className="text-secondary fw-bold">$2.1</p>
                    </div>
                </div>
                <div className="hp-card d-flex justify-content-between align-items-center mb-3">
                    <div className="p-img">
                        <img src={watermelon} className="img-fluid" alt="" />
                    </div>
                    <div className="p-info">
                        <p className='green-text fw-bold'>Apple</p>
                        <p className='text-secondary fw-bold'>1.kg</p>
                    </div>
                    <div className="p-price">
                        <p className="text-secondary fw-bold">$2.1</p>
                    </div>
                </div>
                <div className="hp-card d-flex justify-content-between align-items-center mb-3">
                    <div className="p-img">
                        <img src={mango} className="img-fluid" alt="" />
                    </div>
                    <div className="p-info">
                        <p className='green-text fw-bold'>Apple</p>
                        <p className='text-secondary fw-bold'>1.kg</p>
                    </div>
                    <div className="p-price">
                        <p className="text-secondary fw-bold">$2.1</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}
