import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import deskImage from "./images/desk.webp";
import hqImage from "./images/hq720.jpg";
import foodImage from "./images/food1.png";
import istockImage from "./images/istock.jpg";
import sampleVideo from "./images/shop.mp4";

const slides = [deskImage, hqImage, foodImage, istockImage];

import op1 from "./images/choco.jpg";
import op2 from "./images/ice.jpg";
import op3 from "./images/dog.jpg";
import op4 from "./images/Natures.jpg";
import op5 from "./images/buy.jpeg";
import op6 from "./images/aashirvaad.jpg";
import op7 from "./images/vada.jpg";
import op8 from "./images/organic.jpg";
import op9 from "./images/realistic.avif";
import op10 from "./images/special.avif";
import op11 from "./images/apple.png";
import op12 from "./images/chip.webp";
import op13 from "./images/glucon.jpg";
import op14 from "./images/nuts.avif";
import op15 from "./images/oreo.webp";
import op16 from "./images/pow.jpg";


const opt = [op1, op2, op3, op4, op5, op6, op7, op8, op9, op10, op11, op12, op13, op14, op15, op16];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideCount = slides.length;

  const nextSlide = () => setCurrentIndex((currentIndex + 1) % slideCount);
  const prevSlide = () => setCurrentIndex((currentIndex - 1 + slideCount) % slideCount);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slideCount);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center w-full">
      {/* Image Slider */}
      <Link to="/order">
        <img
          src={slides[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="w-max h-[600px] object-cover rounded-xl shadow-xl mt-5 transition-all duration-500"
        />
      </Link>
      <div className="flex gap-6 my-4">
        <button onClick={prevSlide} className="px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600">Previous</button>
        <button onClick={nextSlide} className="px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600">Next</button>
      </div>

      {/* Video Section */}
      <div className="w-full flex justify-center bg-gray-100 py-6">
        <video
          className="rounded-xl shadow-lg w-[90%] max-w-4xl"
          src={sampleVideo}
          autoPlay
          muted
          loop
        />
      </div>

      {/* Options Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-6 w-[90%]">
        {opt.map((img, index) => (
          <Link to="/order" key={index}>
            <img
              src={img}
              alt={`Option ${index}`}
              className="w-full h-64 object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
