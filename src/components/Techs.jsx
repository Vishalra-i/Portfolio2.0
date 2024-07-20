import React from 'react';
import SlideTrack from './SlideTrack';
import Image from 'next/image';
import image from '../app/assets/image.svg';

function Techs() {
  return (
    <div id="about" className={`p-5 w-full relative text-white bg-black bg-opacity-50`}>
      <div className="text-center relative">
        <h1 className="text-4xl absolute top-0 left-[610px] font-bold z-10">Techs</h1>
        <p className="w-10 h-10 absolute top-0 left-[600px] z-1 bg-purple-500 rounded-full"></p>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="flex items-center justify-between gap-5 w-full mt-24">
        <SlideTrack className="w-1/2 brightness-110" />
        <div className="w-1/2">
          <Image src={image} width={400} height={400} className='drop-shadow-xl' alt="my techs" />
        </div>
      </div>
    </div>
  );
}

export default Techs;
