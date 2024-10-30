import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";


const CartCalculation = () => {
  const [price,setPrice] = useState(105894);
  const [quantity,setQuantity] = useState(1);
  const total = quantity * price ;
  
  
  const handlePrice=(size)=>{
    const inititail = 999;
   const updatedPrice =inititail*parseInt(size.split(' ')[0])
   setPrice(updatedPrice)
  }
  return (
    <div>
       <div className="grid grid-cols-3  gap-3 my-8 w-full lg:w-3/4 border-y py-5">
      {
        sizeData.map(size=><button onClick={()=>handlePrice(size.size)} key={size.id}className="btn btn-outline text-yellow-500 hover:bg-yellow-500 hover:border-none">{size.size}</button>)
      }
        
        </div>    
        <div className="flex justify-between lg:gap-5 w-full items-center lg:w-3/4">
        <h4 className="text-xl">Price : <span className="md:text-4xl text-2xl text-yellow-500 font-medium italic font-serif">${price}</span><span className="text-gray-300 line-through ml-2">$152000</span></h4>
        <div className="flex items-center gap-1 ">
        <button disabled={quantity===1} onClick={()=>setQuantity(quantity-1)} className="btn text-yellow-500"><FaMinus/></button>
           <button className="btn font-semibold text-xl text-yellow-500"><span>{quantity}</span></button>
           <button onClick={()=>setQuantity(quantity+1)} className="btn text-yellow-500"><FaPlus/></button>    
        </div>
        </div>
        <div className="flex justify-center mt-5 lg:w-3/4">
          <button className="btn rounded-none px-10 bg-yellow-500 text-white hover:text-yellow-500">Buy Now</button>
          <button className="btn btn-outline  hover:bg-yellow-500 text-yellow-500 hover:text-white hover:border-none rounded-none ml-10 px-8 ">Add to Cart</button>
        </div>
        <div className="flex  py-2 w-full lg:w-3/4 item-center justify-center my-4">
        <div className="flex  w-[250px]  bg-gray-50 border py-1 justify-center">
        <p className="text-md font-semibold text-yellow-500">Total Amount:</p>
        <p className="text-md font-semibold text-black ml-2">${total}</p>
        </div>
        </div>
    </div>
  );
};

export default CartCalculation;


const sizeData = [
  {
    id: 1,
    size:"106 cm (42)"
  },
  {
    id: 2,
    size:"121 cm (48)"
  },
  {
    id: 3,
    size:"139 cm (55)"
  },
  {
    id: 4,
    size:"164 cm (65)"
  },
  {
    id: 5,
    size:"196 cm (77)"
  },
  {
    id: 6,
    size:"210 cm (83)"
  }
]