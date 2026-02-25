import { collection } from 'firebase/firestore';
import React, { useState } from 'react'
import { db } from '../../../firebase';

import { useNavigate } from 'react-router-dom';

function Productindex() {

    const [product,setProduct] = useState({});
    const navigate = useNavigate();

    const handleChange = (e)=>{
        const{name,value}=e.target;

        setProduct({
            ...product,
            [name]:value
        })
    }

        const handleClick = async()=>{
            try{
                let docref = collection(db,"products");
                let res =await addDoc(docref,product);
                if(res){
                    alert("Data Successfully added")
                }
            }
                    catch(error){
                    console.log(error);
                }
            
        
    }
  return (
    <div>
         <form className="w-full max-w-lg">
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-product-name">
        Product Name
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" name='pname' onChange={handleChange}/>
      {/* <p classNameName="text-red-500 text-xs italic" onChange={handleChange} >Please fill out this field.</p> */}
    </div>

    
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-product-price">
        Product Price
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" name='price' onChange={handleChange} />
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-description">
        Description
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-discription" type="text" name='description'onChange={handleChange} />
      <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
    </div>
  </div>

  {/* ======================image============================== */}

    <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-discription">
        Image
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text"  name='image' onChange={handleChange} />
      {/* <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
    </div>
  </div>    

   <div className="mt-6 flex items-center justify-end gap-x-6">
    
    <button type="button" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"onClick={handleClick} >Save</button>
  </div>
  
</form>
    </div>
  )
}

export default Productindex