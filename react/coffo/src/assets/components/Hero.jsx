
import { initCarousels } from 'flowbite';
import React, { useEffect } from 'react'

function Hero() {
    useEffect(()=>{
        initCarousels();
    },[]);
  return (
    <div id="default-carousel" className="relative w-full" data-carousel="slide">
      <div className="relative h-screen overflow-hidden">

        {/* Slide 1 */}
        <div className="duration-700 ease-in-out" data-carousel-item="active">
          <div
            className="h-screen flex items-center justify-center text-white"
            style={{
              backgroundImage: "url('/carousel-1.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="text-center">
              <p className="text-orange-400 text-2xl">
                We Have Been Serving
              </p>
              <h1 className="text-7xl font-bold">COFFEE</h1>
              <p className="text-2xl mt-4">* SINCE 1950 *</p>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <div
            className="h-screen flex items-center justify-center text-white"
            style={{
              backgroundImage: "url('/carousel-2.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="text-center">
              <p className="text-orange-400 text-2xl">
                Fresh & Organic
              </p>
              <h1 className="text-7xl font-bold">BEST COFFEE</h1>
              <p className="text-2xl mt-4">* QUALITY TASTE *</p>
            </div>
          </div>
        </div>

      </div>

      {/* Previous */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
        data-carousel-prev
      >
        <span className="text-white text-4xl">&#10094;</span>
      </button>

      {/* Next */}
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
        data-carousel-next
      >
        <span className="text-white text-4xl">&#10095;</span>
      </button>
    </div>
  );
}

export default Hero;
