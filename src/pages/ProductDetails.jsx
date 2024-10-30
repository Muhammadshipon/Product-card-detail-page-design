import RelatedProducts from "../components/RelatedProducts";
import Newsletter from "../components/Newsletter";
import ProductImages from "../components/ProductImages";
import CartCalculation from "./CartCalculation";
import ProductInformation from "./ProductInformation";
import ExtraInformation from "./ExtraInformation";



const ProductDetails = () => {
  
  return (
    <div
    
    className="text-gray-600  w-full flex flex-col items-center justify-center">
         
         
                       {/* about product section  */}
<section className="flex relative overflow-y-auto h-full px-5  flex-col lg:flex-row gap-8  justify-between items-start mt-5">
         
                         {/* images section  */}
      <ProductImages/>

                        {/* product info section    */}
     <div className="w-full lg:w-1/2">
          <ProductInformation/>
                       
                      {/* Product Cart calculate section */}
          <CartCalculation/>
      </div>

  </section  >                 
   
                    {/*Products Extra Information  */}       
        <ExtraInformation/>        

                  {/* related products   */}
        <RelatedProducts/>     
                   {/* Newsletter section       */}
           <Newsletter/>        
             
    </div>
  );
};

export default ProductDetails;

