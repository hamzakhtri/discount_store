import React from 'react'
import meat from "../images/meat.png"
import grocery from '../images/Grocery.png'
import UserFooter from '../components/UserFooter'
import { db, collection, getDocs } from '../config/Firebase'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'

export default function UserHome() {

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
            <div className="user-shop-page">
                <div className="container mt-3">
                    <div className="shop-header d-flex justify-content-between align-items-center">
                        <div className="shop-title">
                            <h1 className='green-text'>SAYLANI WELFARE</h1>
                            <h4 className='blue-text'>DISCOUNT STORE</h4>
                        </div>
                        <div className="cart">
                            <i className="fa fa-shopping-cart fs-3" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="image mt-2 mb-4">
                        <img src={grocery} className="img-fluid d-block mx-auto w-m-50" alt="" />
                    </div>
                    <div className="products d-flex flex-column" style={{ marginBottom: "5em" }}>




                        {allProducts.map((item, index) => {
                            return (
                                <div className="product d-flex justify-content-between w-100 align-items-center mb-5">
                                    <div className="product-image">
                                        <img src={item.productImage} alt="" />
                                    </div>
                                    <div className="product-details w-25 mx-auto">
                                        <div className="product-title fw-bold">{item.productName}</div>
                                        <div className="product-description">{item.productDesc}</div>
                                    </div>
                                    <div className="cart-price">
                                        <p className='m-0'>{item.unitPrice}</p>
                                        <p>{item.unitName}</p>
                                        <button className="btn btn-success"><i className="fa fa-plus" aria-hidden="true"></i></button>
                                    </div>
                                </div>
                            );
                        })}


                    </div>
                    <div>
                    </div>
                </div>
            </div>

            <UserFooter />
        </>
    )
}
