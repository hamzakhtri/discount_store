import React from 'react'
import {useNavigate } from 'react-router-dom'
import Swal from "sweetalert2";
import {createUserWithEmailAndPassword,addUserToDBSignup,auth,} from '../config/Firebase'

export default function Signup() {

    const navigate = useNavigate();

    const signupFirebase = async () => {
        try {
            const fullName = document.getElementById("fullName").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("psw").value;
            const contact = document.getElementById("contact").value;

            if (fullName.length === 0 || contact.length === 0) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "username required",
                });
                return;
            }
            await createUserWithEmailAndPassword(auth, email, password);
            await addUserToDBSignup(fullName, contact);
            Swal.fire({
                title: "Congrats! Account Created Successfully.",
                width: 600,
                padding: "3em",
            });
            navigate("/signin");
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
                <div className="container welcome-screen mt-5 vh-75 justify-content-center d-flex align-items-center flex-column">
                    <div className="img-sec text-center">
                        <h1 className='green-text mt-5 '>SAYLANI WELFARE</h1>
                        <p className='blue-text fw-bold mt-1'>ONLINE DISCOUNT STORE</p>
                    </div>
                    <div className="signup-form w-75 mx-auto mt-5">
                        <div className="input-fields">
                            <div className="input-group">
                                <input className="form-control border-end-0 border rounded-pill" type="text" placeholder="Full Name" id="fullName" />
                                <span className="input-group-append d-flex align-items-center">
                                    <i className="fa fa-user"></i>
                                </span>
                            </div>
                            <div className="input-group">
                                <input className="form-control border-end-0 border rounded-pill" type="text" placeholder="Contact" id="contact" />
                                <span className="input-group-append d-flex align-items-center">
                                    <i className="fa fa-phone"></i>
                                </span>
                            </div>
                            <div className="input-group">
                                <input className="form-control border-end-0 border rounded-pill" type="text" placeholder="Email" id="email" />
                                <span className="input-group-append d-flex align-items-center">
                                    <i className="fa fa-envelope"></i>
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
                            <button className='btn btn-primary theme-btn mt-3 fw-bold px-3 shadow' onClick={signupFirebase}>Sign Up</button>
                        </div>
                    </div>
                    <small className='blue-text fw-bold mt-2 c-pointer' onClick={() => navigate("/signin")}>Allready have an account? Login</small>
                </div>
            </div>
        </div>
    )
}
