import React from 'react'
import adminPic from '../images/admin-avatar.png'
import UserFooter from '../components/UserFooter'
import {signOut, auth} from '../config/Firebase'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'

export default function UserSetting() {

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
                <div className="order-sec container" style={{ marginBottom: "6em" }}>
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
                    <div className="signup-btn text-center">
                        <button className='btn btn-primary theme-btn mt-3 fw-bold px-4 shadow' onClick={logout}>Log Out</button>
                    </div>
                </div>
            </div>
            <UserFooter />
        </>
    )
}
