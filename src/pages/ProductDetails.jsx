import { FaMinus, FaPlus } from "react-icons/fa";
import Rating from "../components/Rating";
import Description from "../components/Description";



const ProductDetails = () => {
  
  return (
    <div className="text-gray-600 mb-32 w-full flex flex-col items-center justify-center">
          {/* about product section  */}
    <section className="flex relative overflow-y-auto h-full px-5  flex-col lg:flex-row gap-8  justify-between items-start mt-5">
         {/* images section  */}
     <div className="w-full  lg:w-1/2 flex gap-2 flex-col-reverse lg:flex-row justify-center items-center">
          {/*dynamic  images collection  */}
      <div className="lg:w-1/4 w-full flex flex-row  lg:flex-col gap-2 px-5">
        <div className="hover:border hover:border-yellow-500">
        <img src="/public/images/sony2.png" alt="" className="w-full h-[95px]"/>
        </div>
        <div className="hover:border hover:border-yellow-500">
        <img src="/public/images/sony3.png" alt="" className="w-full h-[95px]"/>
        </div>
        <div className="hover:border hover:border-yellow-500">
        <img src="/public/images/sony.png" alt="" className="w-full h-[95px]"/>
        </div>
        <div className="hover:border hover:border-yellow-500">
        <img src="/public/images/sony4.png" alt="" className="w-full h-[95px]"/>
        </div>
      </div>
            {/* display image  */}
     <div className="lg:w-3/4 border  border-yellow-500 w-full top-0 sticky">
        <img src="/public/images/sony4.png" alt="tv" className="w-full lg:h-[600px]" />
      </div>       
      </div> 
          {/* product info section    */}
     <div className="w-full lg:w-1/2">
     <p className="text-lg"><span className=" font-semibold">Brand:</span> <span>LG</span></p>
     <p className="text-lg"><span className=" font-semibold">Model:</span> <span> OLED42C2PSA</span></p>
     <p className="text-lg"><span className=" font-semibold">Availability: </span> <span>Only 2 in Stock</span></p>
     <h2 className="text-2xl font-bold">
     LG C2 42 (106cm) 4K Smart OLED evo TV | WebOS | Cinema HDR
     </h2>
     <Rating/>
       <ul className="list-disc ml-4">
        <li>α9 Gen5 AI Processor with AI Picture Pro & AI 4K Upscaling</li>
        <li>Pixel Dimming, Perfect Black, 100% Color Fidelity & Color Volume</li>
        <li>Hands-free Voice Control, Always Ready</li>
        <li>Dolby Vision IQ with Precision Detail, Dolby Atmos, Filmmaker Mode</li>
        <li>Eye Comfort Display: Low-Blue Light, Flicker-Free</li>
       </ul>

          {/* product sizes  */}
      <div className="grid grid-cols-3  gap-3 my-8 w-full lg:w-3/4 border-y py-5">
        <button className="btn btn-outline text-yellow-500 hover:bg-yellow-500 hover:border-none">106 cm (42)</button>
        <button className="btn btn-outline text-yellow-500 hover:bg-yellow-500 hover:border-none">121 cm (48)</button>
        <button className="btn btn-outline text-yellow-500 hover:bg-yellow-500 hover:border-none">139 cm (55)</button>
        <button className="btn btn-outline text-yellow-500 hover:bg-yellow-500 hover:border-none">164 cm (65)</button>
        <button className="btn btn-outline text-yellow-500 hover:bg-yellow-500 hover:border-none">196 cm (77)</button>
        <button className="btn btn-outline text-yellow-500 hover:bg-yellow-500 hover:border-none">210 cm (83)</button>
        
        </div>    
        <div className="flex justify-between lg:gap-5 w-full items-center lg:w-3/4">
        <h4 className="text-xl">Price : <span className="md:text-4xl text-2xl text-yellow-500 font-medium italic font-serif">$140000</span><span className="text-gray-300 line-through ml-2">$152000</span></h4>
        <div className="flex items-center gap-1 ">
        <button className="btn text-yellow-500"><FaMinus/></button>
           <button className="btn font-semibold text-xl text-yellow-500"><span>1</span></button>
           <button className="btn text-yellow-500"><FaPlus /></button>    
        </div>
        </div>
        <div className="flex justify-center mt-5 lg:w-3/4">
          <button className="btn rounded-none px-10 bg-yellow-500 text-white hover:text-yellow-500">Buy Now</button>
          <button className="btn btn-outline  hover:bg-yellow-500 text-yellow-500 hover:text-white hover:border-none rounded-none ml-10 px-8 ">Add to Cart</button>
        </div>
        <div className="flex  py-2 w-full lg:w-3/4 item-center justify-center my-4">
        <div className="flex  w-[250px]  bg-gray-50 border py-1 justify-center">
        <p className="text-md font-semibold text-yellow-500">Total Amount:</p>
        <p className="text-md font-semibold text-black ml-2">$140000</p>
        </div>
        </div>
      </div>    
      </section>                 
   
                           {/* description section   */}       
           <Description/>          
    </div>
  );
};

export default ProductDetails;