import React from 'react'
import AdminNavbar from '../components/AdminNavbar'
import Footer from '../components/Footer'
import { useSelector } from 'react-redux';
import { db, ref, storage, uploadBytes, getDownloadURL, doc, setDoc } from '../config/Firebase'
import swal from 'sweetalert2';
import Swal from 'sweetalert2';


export default function AddItem() {



    // admin uploading product 

    const userٰInfo = useSelector((state) => state.myAuth);

        const uploadImage = async (image) => {
        const storageRef = ref(storage, `images/${image.name}`);
        const snapshot = await uploadBytes(storageRef, image);
        const url = await getDownloadURL(snapshot.ref);
        return url;
    };
    const addProduct = async () => {
        const productName = document.getElementById("productName").value;
        const productDesc = document.getElementById("productDesc").value;
        const productCategory = document.getElementById("productCategory").value;
        const unitName = document.getElementById("unitName").value;
        const unitPrice = document.getElementById("unitPrice").value;

        if (!document.getElementById("productImage").files[0]) {
            swal("Select Image to Create Item.");
            return;
        }
        const productImage = await uploadImage(
            document.getElementById("productImage").files[0]
        );

        const productItems = {
            productName,
            productDesc,
            productCategory,
            unitName,
            unitPrice,
            productImage,
        };
        if (
            !productName ||
            !productDesc ||
            !productCategory ||
            !unitName ||
            !unitPrice ||
            !productImage
        ) {
            swal("Please Input all fields");
        }
        const productId = userٰInfo.user.uid + Date.now();
        const myItemRef = doc(db, "products", `${productId}`);
        await setDoc(myItemRef, productItems);
        Swal.fire({
            title: "Item added",
            width: 400,
            icon: 'success'
        });
    };


    return (
        <>
            <AdminNavbar />
            <div className="container mb-5 addItemSec">
                <p className="fs-6 mt-5 ms-2" style={{ color: "#024F9D" }}>Add New Items</p>
                <div className="container">
                    <div className="signup-form w-75 mx-auto mt-4">
                        <div className="input-fields">
                            <div className="input-group">
                                <input className="form-control border-end-0 border rounded-pill" type="text" placeholder="Product Name" id="productName" />
                            </div>
                            <div className="input-group" style={{ border: "1px solid grey" }}>
                                <textarea className="form-control " type="text" placeholder="Product Description" id="productDesc" />
                            </div>

                            <div className="input-group">
                                <select className="form-control mb-2 border-0" id="productCategory">
                                    <option className="hidden" selected disabled>Select Category
                                    </option>
                                    <option value="fruit">Fruits</option>
                                </select>
                            </div>
                            <div className="input-group">
                                <input className="form-control border-end-0 border rounded-pill" type="text" placeholder="Unit Name" id="unitName" />
                            </div>
                            <div className="input-group">
                                <input className="form-control border-end-0 border rounded-pill" type="text" placeholder="Unit Price" id="unitPrice" />
                            </div>
                            <div className="mb-3" style={{ border: "2px solid grey" }}>
                                <input className="form-control" type="file" id="productImage" />
                            </div>
                        </div>
                        <div className="signup-btn text-center">
                            <button className='btn btn-primary theme-btn mt-3 fw-bold px-4 shadow' onClick={addProduct}>Add Product</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
