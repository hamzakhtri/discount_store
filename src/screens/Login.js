import React from 'react'
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, auth } from '../config/Firebase';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import actionCreators from "../store/index";
import { useState } from 'react';

export default function Login() {

    const navigate = useNavigate();

    const dispatch = useDispatch();
  const { sendAdminData, isAuthenticatedData, admintExists, authData } =
    bindActionCreators(actionCreators, dispatch);

  const admins = useSelector((state) => state.myAdmins);

  let [whereToNavigate, setWhereToNavigate] = useState("");

  const isAdminHandler = (e) => {
    for (let item of admins) {
      if (item.email === e.target.value) {
        admintExists(true);
        setWhereToNavigate("/admin");
        return;
      } else {
        setWhereToNavigate("/userHome");
      }
    }
}


    const login = async () => {
        try {
          const email = document.getElementById("email").value;
          const password = document.getElementById("psw").value;
    
          const userInfo =  await signInWithEmailAndPassword(auth, email, password);

          Swal.fire({
            title: "Loggined Successfully.",
            width: 500,
            padding: "3em",
            icon: 'success'
          });
          authData(userInfo);
          navigate(whereToNavigate);
          window.scrollTo(0, 0);
        } catch (e) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: e.message,
          });
        }
      };

    return (
        <div>
            <div>
                <div className="container welcome-screen mt-5 vh-75 d-flex align-items-center justify-content-between flex-column">
                    <div className="img-sec text-center">
                        <h1 className='green-text mt-5 '>SAYLANI WELFARE</h1>
                        <p className='blue-text fw-bold mt-1'>ONLINE DISCOUNT STORE</p>
                    </div>
                    <div className="signup-form w-75 mx-auto mt-5">
                        <div className="input-fields">
                            <div className="input-group">
                                <input className="form-control border-end-0 border rounded-pill" type="email" onChange={isAdminHandler} placeholder="Your Email" id="email" />
                                <span className="input-group-append d-flex align-items-center">
                                    <i className="fa fa-user"></i>
                                </span>
                            </div>
                            <div className="input-group">
                                <input className="form-control border-end-0 border rounded-pill" type="password" placeholder="Password" id="psw" />
                                <span className="input-group-append d-flex align-items-center">
                                    <i className="fa fa-eye"></i>
                                </span>
                            </div>
                        </div>
                        <div className="signup-btn text-center">
                        <button className='btn btn-primary theme-btn mt-3 fw-bold px-4 shadow' onClick={login}>Sign In</button>
                        </div>
                    </div>
                    <small className='blue-text fw-bold mt-2 c-pointer' onClick={()=>navigate("/signup")}>Don't have an account? Register</small>
                </div>
            </div>
        </div>
    )
}
