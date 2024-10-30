import { useState } from "react";


const ProductImages = () => {
  const [url,setUrl] = useState('/images/sony2.png');
  return (
    <div className="w-full  lg:w-1/2 flex gap-2 flex-col-reverse lg:flex-row justify-center items-center">
    {/*dynamic  images collection  */}
<div
data-aos="fade-left"
data-aos-offset="200"
 data-aos-delay="50"
data-aos-duration="1000"
data-aos-easing="ease-in-out"
data-aos-mirror="true"
data-aos-once="true"
data-aos-anchor-placement="top-center"

className="lg:w-1/4 w-full flex flex-row  lg:flex-col gap-2 px-5">
  <div onClick={()=>setUrl('/images/sony2.png')} className="hover:border hover:border-yellow-500">
  <img src="/images/sony2.png" alt="" className="w-full h-[95px]"/>
  </div>
  <div onClick={()=>setUrl('/images/sony3.png')} className="hover:border hover:border-yellow-500">
  <img src="/images/sony3.png" alt="" className="w-full h-[95px]"/>
  </div>
  <div onClick={()=>setUrl('/images/sony.png')} className="hover:border hover:border-yellow-500">
  <img src="/images/sony.png" alt="" className="w-full h-[95px]"/>
  </div>
  <div onClick={()=>setUrl('/images/sony4.png')} className="hover:border hover:border-yellow-500">
  <img src="/images/sony4.png" alt="" className="w-full h-[95px]"/>
  </div>
</div>
      {/* display image  */}
<div

className="lg:w-3/4 border  border-yellow-500 w-full top-0 sticky animate__animated animate__fadeInDown  animate__slow">
  <img src={url} alt="tv" className="w-full  lg:h-[600px]" />
</div>       
</div> 
  );
};

export default ProductImages;