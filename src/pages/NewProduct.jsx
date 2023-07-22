import React, {useState} from 'react'
import ProductForm from "../components/ProductForm"


const NewProduct = () => {

  const [formData, setFormData] = useState("")

  const initialState = {
  name:"",
  image:"",
  price:"",
  dampingRate:0.2,
  amount:1
  
  }
  

  return (
    <div className='container'>

    <ProductForm/>
      
    </div>
  );
}

export default NewProduct