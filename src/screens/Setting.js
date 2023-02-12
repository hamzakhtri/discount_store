import React from 'react'
import Footer from '../components/Footer'
import mango from '../images/mango.png'
import adminPic from '../images/admin-avatar.png'
import {signOut, auth} from '../config/Firebase'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'

export default function Setting() {

    const navigate = useNavigate();

    const logout = ()=>{
        signOut(auth).then(() => {
             Swal.fire({
                title: "Logged Out Successfully.",
                width: 500,
                padding: "3em",
                icon: 'success'
              });
              navigate("/");
          }).catch((error) => {
            // An error happened.
          });
    }

    return (
            <>
                <div className="container">
                    <div className="admin-head d-flex flex-column align-items-center">
                        <p className='text-center mt-2 fs-5 text-primary'>Settings</p>
                        <img src={adminPic} width="100" alt="" />
                        <div className="input-group w-75 mt-2">
                            <input className="form-control border-end-0" type="text" placeholder="Update Fullname" id="update-fullname" />
                            <span className="input-group-append d-flex align-items-center">
                                <i className="fa fa-check green-text"></i>
                            </span>
                        </div>
                    </div>
                    <div className="category-add d-flex flex-column align-items-center mt-3">
                        <div className="mb-3 w-75" style={{ border: "1px solid grey" }}>
                            <input className="form-control" type="file" id="product-img" />
                        </div>
                        <div className="input-group w-75">
                            <input className="form-control " type="text" placeholder="Category Name" id="category-name" />
                            <button className="btn btn-success">Add</button>
                        </div>
                    </div>
                    <div className="all-categories mt-4 d-flex flex-column align-items-center fw-bold blue-text mb-5">
                        <p>All Categories</p>
                        <div className="overflow-y w-75 mb-5">
                            <div className="hp-card d-flex align-items-center mb-3 justify-content-between">
                                <div className="p-img">
                                    <img src={mango} className="img-fluid" width="50px" alt="" />
                                </div>
                                <div className="p-info d-flex">
                                    <p className='green-text fw-bold mt-2'>Apple</p>
                                </div>
                            </div>
                            <div className="hp-card d-flex align-items-center mb-3 justify-content-between">
                                <div className="p-img">
                                    <img src={mango} className="img-fluid" width="50px" alt="" />
                                </div>
                                <div className="p-info d-flex">
                                    <p className='green-text fw-bold mt-2'>Apple</p>
                                </div>
                            </div>
                            <div className="hp-card d-flex align-items-center mb-3 justify-content-between">
                                <div className="p-img">
                                    <img src={mango} className="img-fluid" width="50px" alt="" />
                                </div>
                                <div className="p-info d-flex">
                                    <p className='green-text fw-bold mt-2'>Apple</p>
                                </div>
                            </div>
                            <div className="signup-btn text-center">
                                <button className='btn btn-primary theme-btn mt-3 fw-bold px-4 shadow' onClick={logout}>Log Out</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>

    )
}
