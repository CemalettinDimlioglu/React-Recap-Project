 import React, { useState } from "react";
 import ProductForm from "../components/ProductForm";
 import axios from "axios";
 const initialState = {
   name: "",
   image: "",
   price: 0,
   dampingRate: 0.2,
   amount: 1,
 };
 const NewProduct = () => {
   const url = "https://64b83b6221b9aa6eb079b2d2.mockapi.io/recap";
   const [formData, setFormData] = useState(initialState);
   const handleChange = (e) => {
     setFormData({ ...formData, [e.target.id]: e.target.value }); //change eventının gerçekleştiği inputtaki id attribute u ile formDatamdaki key değerlerim aynı olduğu için dinamik bir şekilde formData mı güncelleybiliyorum
     console.log({ [e.target.id]: e.target.value });
   };
   const handleSubmit = async (e) => {
     e.preventDefault();
     try {
       await axios.post(url, formData);
       setFormData(initialState);
     } catch (error) {}
   };
   console.log(initialState);
   return (
     <div className="container">
       <ProductForm
         handleChange={handleChange}
         formData={formData}
         handleSubmit={handleSubmit}
         text="New"
       />
     </div>
   );
 };
 export default NewProduct;