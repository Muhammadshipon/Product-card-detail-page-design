import { useState } from "react";
import Description from "../components/Description";
import Review from "./Review";
import Specification from "./Specification";


const ExtraInformation = () => {
  const [text,setText] = useState('Description')
  return (
    <div   >
    <section 
    
    className="w-full lg:px-10  max-w-4xl my-10  px-5">
           {/*headers buttons  */}
   <div className="flex justify-center gap-2 lg:gap-8 my-10">
   <span onClick={()=>setText('Description')} className={`text-lg lg:text-xl font-semibold  ${text==='Description'?'border-b-4 text-yellow-500 lg:px-4 px-2 pb-1 border-yellow-500':''}`}>Description</span>   
   <span onClick={()=>setText('Specification')} className={`text-lg lg:text-xl font-semibold  ${text==='Specification'?'border-b-4 text-yellow-500 lg:px-4 px-2 pb-1 border-yellow-500':''}`}>Specification</span>   
   <span onClick={()=>setText('Reviews')} className={`text-lg lg:text-xl font-semibold  ${text==='Reviews'?'border-b-4 lg:px-4 px-2 pb-1 text-yellow-500 border-yellow-500':''}`}>Reviews</span>   
   </div>

                  {/* Specification  */}
   {
    text === 'Specification' && 
     <Specification/>
   }

             {/* review  */}
   {
    text === 'Reviews' &&
    <Review/>
   }

                     {/* description  */}
   {
    text === 'Description' &&
    <Description />
   }
      
      </section>        
  </div>
  );
};

export default ExtraInformation;