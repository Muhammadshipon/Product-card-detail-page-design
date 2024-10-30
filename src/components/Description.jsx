import { useState } from "react";


const Description = () => {
  const [text,setText] = useState('Description')
  return (
    <div>
      <section className="w-full lg:px-10  max-w-4xl my-10  px-5">
             {/*headers buttons  */}
     <div className="flex justify-center gap-5 my-10">
     <span onClick={()=>setText('Description')} className={`text-xl font-semibold  ${text==='Description'?'border-b-4 text-yellow-500 px-4 pb-1 border-yellow-500':''}`}>Description</span>   
     <span onClick={()=>setText('Specification')} className={`text-xl font-semibold  ${text==='Specification'?'border-b-4 text-yellow-500 px-4 pb-1 border-yellow-500':''}`}>Specification</span>   
     <span onClick={()=>setText('Reviews')} className={`text-xl font-semibold  ${text==='Reviews'?'border-b-4 px-4 pb-1 text-yellow-500 border-yellow-500':''}`}>Reviews</span>   
     </div>

                    {/* Specification  */}
     {
      text === 'Specification' && <div>
       
       <p>
       The LG C2 42 (106cm) 4K Smart OLED evo TV is the best all-around OLED TV we've tested. Although all OLEDs deliver similar fantastic picture quality, this one stands out for its value because it has many gaming-oriented features that are great for gamers.

*Only 65G2 is shown in the image for example purposes. All 2022 LG OLED models feature eco-friendly packaging.
**65C2 Stand model is at a minimum 39% lighter than the C1 series.
***The Reducing CO2 footprint label applies to 65C2 only. All other C2 models feature a CO2 Measured label.
****UL ECV certification based on TV frame and back cover. Percentage of recycled content varies by model and size.  The LG C2 42 (106cm) 4K Smart OLED evo TV is the best all-around OLED TV we've tested. Although all OLEDs deliver similar fantastic picture quality, this one stands out for its value because it has many gaming-oriented features that are great for gamers.

*Only 65G2 is shown in the image for example purposes. All 2022 LG OLED models feature eco-friendly packaging.
**65C2 Stand model is at a minimum 39% lighter than the C1 series.
***The Reducing CO2 footprint label applies to 65C2 only. All other C2 models feature a CO2 Measured label.
****UL ECV certification based on TV frame and back cover. Percentage of recycled content varies by model and size. The LG C2 42 (106cm) 4K Smart OLED evo TV is the best all-around OLED TV we've tested. Although all OLEDs deliver similar fantastic picture quality, this one stands out for its value because it has many gaming-oriented features that are great for gamers.

*Only 65G2 is shown in the image for example purposes. All 2022 LG OLED models feature eco-friendly packaging.
**65C2 Stand model is at a minimum 39% lighter than the C1 series.
***The Reducing CO2 footprint label applies to 65C2 only. All other C2 models feature a CO2 Measured label.
****UL ECV certification based on TV frame and back cover. Percentage of recycled content varies by model and size.  <span className="text-yellow-500">More
...</span>


       </p>
      </div>
     }

               {/* review  */}
     {
      text === 'Reviews' &&
      <div className="flex flex-col lg:flex-row gap-10 justify-center lg:items-start items-center">
                      {/* customer review  */}
                      <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12  text-gray-900">
	<div>
  <div className="flex flex-col w-full">
		<h2 className="text-3xl font-semibold text-center">Customer reviews</h2>
		<div className="flex flex-wrap items-center mt-2 mb-1 space-x-2">
			<div className="flex">
				<button type="button" title="Rate 1 stars" aria-label="Rate 1 stars">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-yellow-500">
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
					</svg>
				</button>
				<button type="button" title="Rate 2 stars" aria-label="Rate 2 stars">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-yellow-500">
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
					</svg>
				</button>
				<button type="button" title="Rate 3 stars" aria-label="Rate 3 stars">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-yellow-500">
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
					</svg>
				</button>
				<button type="button" title="Rate 4 stars" aria-label="Rate 4 stars">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-gray-600">
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
					</svg>
				</button>
				<button type="button" title="Rate 5 stars" aria-label="Rate 5 stars">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-gray-600">
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
					</svg>
				</button>
			</div>
			<span className="text-gray-400">3 out of 5</span>
		</div>
		<p className="text-sm text-gray-400">861 global ratings</p>
		<div className="flex flex-col mt-4">
			<div className="flex items-center space-x-1">
				<span className="flex-shrink-0 w-12 text-sm">5 star</span>
				<div className="flex-1 h-4 overflow-hidden rounded-sm bg-gray-700">
					<div className="bg-yellow-500 h-4 w-5/6"></div>
				</div>
				<span className="flex-shrink-0 w-12 text-sm text-right">83%</span>
			</div>
			<div className="flex items-center space-x-1">
				<span className="flex-shrink-0 w-12 text-sm">4 star</span>
				<div className="flex-1 h-4 overflow-hidden rounded-sm bg-gray-700">
					<div className="bg-yellow-500 h-4 w-4/6"></div>
				</div>
				<span className="flex-shrink-0 w-12 text-sm text-right">67%</span>
			</div>
			<div className="flex items-center space-x-1">
				<span className="flex-shrink-0 w-12 text-sm">3 star</span>
				<div className="flex-1 h-4 overflow-hidden rounded-sm bg-gray-700">
					<div className="bg-yellow-500 h-4 w-3/6"></div>
				</div>
				<span className="flex-shrink-0 w-12 text-sm text-right">50%</span>
			</div>
			<div className="flex items-center space-x-1">
				<span className="flex-shrink-0 w-12 text-sm">2 star</span>
				<div className="flex-1 h-4 overflow-hidden rounded-sm bg-gray-700">
					<div className="bg-yellow-500 h-4 w-2/6"></div>
				</div>
				<span className="flex-shrink-0 w-12 text-sm text-right">33%</span>
			</div>
			<div className="flex items-center space-x-1">
				<span className="flex-shrink-0 w-12 text-sm">1 star</span>
				<div className="flex-1 h-4 overflow-hidden rounded-sm bg-gray-700">
					<div className="bg-yellow-500 h-4 w-1/6"></div>
				</div>
				<span className="flex-shrink-0 w-12 text-sm text-right">17%</span>
			</div>
		</div>
	</div>
  <div className="border border-gray-300 rounded-lg p-4 mb-4 mt-8">
  <h3 className="font-semibold text-lg">Yoga Mat</h3>
  <div className="flex items-center mb-2">
    <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
    <span className="ml-2 text-gray-500">Emily Davis</span>
  </div>
  <p className="text-gray-700">"Best yoga mat I've ever used! It's thick, non-slip, and very comfortable. Perfect for my home workouts. Worth every penny!"</p>
</div>
<div className="border border-gray-300 rounded-lg p-4 mb-4 ">
  <h3 className="font-semibold text-lg">Blender</h3>
  <div className="flex items-center mb-2">
    <span className="text-yellow-500">⭐⭐⭐</span>
    <span className="ml-2 text-gray-500">Alex Johnson</span>
  </div>
  <p className="text-gray-700">"This blender does the job, but it's a bit loud. It struggles with tougher ingredients sometimes. Good for basic smoothies but not for heavy-duty blending."</p>
</div>

</div>   
<p>See More...</p>
    </div>                 


                        {/* your review  */}
       <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 bg- text-gray-900">
	<div className="flex flex-col items-center w-full">
		<h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
		<div className="flex flex-col items-center py-6 space-y-3">
			<span className="text-center">How was your experience?</span>
			<div className="flex space-x-3">
				<button type="button" title="Rate 1 stars" aria-label="Rate 1 stars">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 text-yellow-500">
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
					</svg>
				</button>
				<button type="button" title="Rate 2 stars" aria-label="Rate 2 stars">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 text-yellow-500">
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
					</svg>
				</button>
				<button type="button" title="Rate 3 stars" aria-label="Rate 3 stars">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 text-yellow-500">
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
					</svg>
				</button>
				<button type="button" title="Rate 4 stars" aria-label="Rate 4 stars">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 text-yellow-500">
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
					</svg>
				</button>
				<button type="button" title="Rate 5 stars" aria-label="Rate 5 stars">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 text-gray-300">
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
					</svg>
				</button>
			</div>
		</div>
		<div className="flex flex-col w-full">
			<textarea rows="3" placeholder="Message..." className="p-4 rounded-md resize-none text-gray-100 bg-gray-200"></textarea>
			<button type="button" className="py-4 my-8 font-semibold rounded-md text-gray-900 bg-yellow-500">Leave feedback</button>
		</div>
	</div>
	<div className="flex items-center justify-center">
		<a rel="noopener noreferrer" href="#" className="text-sm text-gray-400">Maybe later</a>
	</div>
</div>
      </div>
     }

                       {/* description  */}
     {
      text === 'Description' &&
      <div>
      <p className="pb-3">
      Elevate your entertainment experience with the BRAVIA 3 K-85S30 Smart TV. Powered by the cutting-edge 4K HDR Processor X1™, this TV delivers vivid, lifelike visuals and dynamic sound that will immerse you in everything you love. With its large 85-inch 4K Ultra HD display, the K-85S30 offers stunning picture clarity, vibrant colors, and exceptional contrast for a cinematic experience at home.
      </p>
      <img src="/public/images/sony5.png" alt="photo" className="w-full" />
      <p>
      Elevate your entertainment experience with the BRAVIA 3 K-85S30 Smart TV. Powered by the cutting-edge 4K HDR Processor X1™, this TV delivers vivid, lifelike visuals and dynamic sound that will immerse you in everything you love. With its large 85-inch 4K Ultra HD display, the K-85S30 offers stunning picture clarity, vibrant colors, and exceptional contrast for a cinematic experience at home.
      Elevate your entertainment experience with the BRAVIA 3 K-85S30 Smart TV. Powered by the cutting-edge 4K HDR Processor X1™, this TV delivers vivid, lifelike visuals and dynamic sound that will immerse you in everything you love. With its large 85-inch 4K Ultra HD display, the K-85S30 offers stunning picture clarity, vibrant colors, and exceptional contrast for a cinematic experience at home
      <span className="text-yellow-500">More..</span>
      </p>
      </div>
     }
        
        </section>        
    </div>
  );
};

export default Description;