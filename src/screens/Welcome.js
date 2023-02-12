import React from 'react'
import logo from '../images/logo.png'
import { useNavigate } from 'react-router-dom'

export default function Welcome() {

  const navigate = useNavigate();

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
