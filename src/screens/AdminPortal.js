import React from 'react'
import AdminNavbar from '../components/AdminNavbar'
// import appleImg from '../images/apple-img.png'
// import watermelon from '../images/water-mellon.png'
// import mango from '../images/mango.png'
import Footer from '../components/Footer'
import {db , collection, getDocs} from '../config/Firebase'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'

export default function AdminPortal() {


    const userٰInfo = useSelector((state) => state.myAuth);

  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const myProducts = [];
      querySnapshot.forEach((doc) => {
        myProducts.push({ id: doc.id, ...doc.data() });
      });
      setAllProducts(myProducts);
    };

    getProducts();
  }, []);

  console.log(allProducts);

    return (
        <>
            <AdminNavbar />
            <div className="horizontal-card-sec container">
                <h6 className='mt-5 mb-5 blue-text fw-bold'>All Products</h6>
                {allProducts.map((item, index) => {
                    return (
                        <div
                            className="hp-card d-flex justify-content-between align-items-center mb-3"
                            key={index}
                        >
                            <div className="p-img">
                                <img
                                    src={item.productImage}
                                    className="img-fluid"
                                    width="80px"
                                    alt=""
                                />
                            </div>
                            <div className="p-info">
                                <p className="green-text fw-bold">{item.productName}</p>
                                <p className="text-secondary fw-bold">
                                    {item.unitName}
                                </p>
                            </div>
                            <div className="p-price">
                                <p className="text-secondary fw-bold">{item.unitPrice}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <Footer />
        </>

    )
}
