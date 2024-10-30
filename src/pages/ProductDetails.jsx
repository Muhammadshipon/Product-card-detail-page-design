

const ProductDetails = () => {
  return (
    <div>
          {/* cart section  */}
    <section className="flex flex-col lg:flex-row gap-8 mt-5">
         {/* images section  */}
     <div className="w-full lg:w-1/2 flex gap-2 flex-col-reverse lg:flex-row justify-center items-center">
          {/*dynamic  images collection  */}
      <div className="lg:w-1/4 w-full flex flex-row lg:flex-col gap-2 px-5">
        <div className="hover:border hover:border-orange-500">
        <img src="/public/images/sony2.png" alt="" className="w-full h-[95px]"/>
        </div>
        <div className="hover:border hover:border-orange-500">
        <img src="/public/images/sony3.png" alt="" className="w-full h-[95px]"/>
        </div>
        <div className="hover:border hover:border-orange-500">
        <img src="/public/images/sony.png" alt="" className="w-full h-[95px]"/>
        </div>
        <div className="hover:border hover:border-orange-500">
        <img src="/public/images/sony4.png" alt="" className="w-full h-[95px]"/>
        </div>
      </div>
            {/* display image  */}
     <div className="lg:w-3/4 w-full ">
        <img src="/public/images/sony2.png" alt="tv" className="w-full h-[400px]" />
      </div>       
      </div> 
          {/* product features and add to cart section     */}
     <div className="w-full lg:w-1/2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptates sed natus ipsa quam laboriosam quis est pariatur libero suscipit iusto, officia, voluptatibus aperiam cum a laborum beatae illum? Dignissimos.
      
      </div>     
      
      </section>      
    </div>
  );
};

export default ProductDetails;