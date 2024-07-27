import { products } from "../constants";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {ArrowBigLeft, ArrowBigRight} from "lucide-react";

const OtherShoeImgs = () => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % product.otherShoeImgsURL.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + product.otherShoeImgsURL.length) % product.otherShoeImgsURL.length);
  };

  useEffect(() => {
    const handleMouseOver = (index) => {
      setCurrentIndex(index);
    };

    const miniImgs = document.querySelectorAll(".mini-img");

    miniImgs.forEach((img, index) => {
      img.addEventListener("mouseover", () => handleMouseOver(index));
    });

    return () => {
      miniImgs.forEach((img, index) => {
        img.removeEventListener("mouseover", () => handleMouseOver(index));
      });
    };
  }, [product]);

  return (
    <div> 
      <div className="relative flex justify-center items-center">
        <button onClick={handlePrev} className="absolute left-0">
          <ArrowBigLeft />
        </button>
        <img
          id="main-img"
          src={product.otherShoeImgsURL[currentIndex]}
          alt={`Shoe Image ${currentIndex + 1}`}
          className="rounded main-img w-[100rem] max-lg:w-screen"
        />
        <button onClick={handleNext} className="absolute right-0">
          <ArrowBigRight/>
        </button>
      </div>
      {/* <div className="flex flex-row gap-4 overflow-x-auto mt-4">
        {product.otherShoeImgsURL.map((imgURL, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              src={imgURL}
              alt={`Shoe Image ${index + 1}`}
              className={`rounded mini-img cursor-pointer hover:opacity-65 ${index === currentIndex ? 'opacity-100' : 'opacity-50'}`}
            />
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default OtherShoeImgs;
