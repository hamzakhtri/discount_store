import React, {useEffect} from 'react'
import logo from '../images/logo.png'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import actionCreators from "../store/index";
import {collection, getDocs, db} from "../config/Firebase"


export default function Welcome() {

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { sendAdminData } =
    bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    (async () => {
      const querySnapshot = await getDocs(collection(db, "admins"));
      const admins = [];
      querySnapshot.forEach((doc) => {
        admins.push({ id: doc.id, ...doc.data() });
      });
      console.log(admins);

    //   dispatching action
      sendAdminData(admins);
    })();
  }, []);

  return (
    <div>
      <div className="container welcome-screen mt-5 h-100 d-flex align-items-center flex-column">
        <div className="img-sec text-center">
            <img src={logo} alt="" className='img-fluid'/>
            <h1 className='green-text mt-5 '>SAYLANI WELFARE</h1>
            <p className='blue-text fw-bold mt-3'>ONLINE DISCOUNT STORE</p>
            <button className='btn btn-primary theme-btn mt-3 fw-bold px-3 shadow' onClick={()=>navigate('/signup')}>Get Started</button>
        </div>
      </div>
    </div>
  )
}
