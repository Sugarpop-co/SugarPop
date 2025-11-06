import NextIcon from "../icons/NextIcon";
import PrevIcon from "../icons/PrevIcon";

import imgProducto1 from "../../images/image-product-1.jpg";
import imgProducto2 from "../../images/image-product-2.jpg";
import imgProducto3 from "../../images/image-product-3.jpg";
import imgProducto4 from "../../images/image-product-4.jpg";
import imgProducto5 from "../../images/image-product-5.jpg";
import { useState } from "react";


import imgProduct1 from "../../images/image-product-1-thumbnail.jpg";
import imgProduct2 from "../../images/image-product-2-thumbnail.jpg";
import imgProduct3 from "../../images/image-product-3-thumbnail.jpg";
import imgProduct4 from "../../images/image-product-4-thumbnail.jpg";
import imgProduct5 from "../../images/image-product-5-thumbnail.jpg";



const LIST_IMG  = [imgProducto1, imgProducto2, imgProducto3, imgProducto4]; 


export default () => {

  const [index, setIndex] = useState(0);

  const handleClickNext = () => {
    index === LIST_IMG.length - 1 ? setIndex(0) : setIndex(index + 1);


  };
  const handleClickPrev = () => {
    index === 0 ? setIndex(LIST_IMG.length - 1) : setIndex(index - 1);


  };
  return(
        <section className="grid md:grid-cols-4 md:gap-4">
          <div className="relative col-span-4">
            <img src={LIST_IMG[index]} 
                alt="" 
                className="aspect-[16/12]" />

            <div className="absolute top-1/2 left-0 -translate-y-1/2 justify-between px-4 flex w-full">
                <button className="w-10 h-10 bg-white rounded-full place-items-center grid"
                  onClick={handleClickPrev}>
                  <PrevIcon />
                </button>
                <button className="w-10 h-10 bg-white rounded-full place-items-center grid"
                  onClick={handleClickNext}>
                  <NextIcon />
                </button>
            </div>
          </div>
          <img src={imgProduct1} alt=""className="hidden md:block"/>
          <img src={imgProduct2} alt=""className="hidden md:block"/>
          <img src={imgProduct3} alt=""className="hidden md:block"/>
          <img src={imgProduct4} alt=""className="hidden md:block"/>
          <img src={imgProduct5} alt=""className="hidden md:block"/>


        
        </section>
    );
};