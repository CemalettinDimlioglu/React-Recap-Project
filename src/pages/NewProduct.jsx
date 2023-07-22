import React, {useState} from 'react'
import ProductForm from "../components/ProductForm"
import axios from 'axios';

const initialState = {
  name: "",
  image: "",
  price: "",
  dampingRate: 0.2,
  amount: 1,
};
  

const NewProduct = () => {
   const url = "https://64b83b6221b9aa6eb079b2d2.mockapi.io/recap";

  const [formData, setFormData] = useState(initialState)


  const handleChane = (e) => {
    setFormData({...formData, [e.target.id]:e.target.value})

    console.log({ ...formData, [e.target.id]: e.target.value });
  
  }

   const handleSubmit = async (e) => {
     e.preventDefault();
     try {
       await axios.post(url, formData);
       setFormData(initialState);
     } catch (error) {}
   };

  console.log(initialState);



  

  return (
    <div className='container'>

    <ProductForm  handleChange={handleChane} formData={formData}  handleSubmit={handleSubmit}/>
      
    </div>
  );
}

export default NewProduct