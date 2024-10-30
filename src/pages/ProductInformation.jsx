import Rating from "../components/Rating";


const ProductInformation = () => {
  return (
    <div>
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
    </div>
  );
};

export default ProductInformation;