import { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../constants";

const ShoeSizes = () => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);
  const [selectedSize, setSelectedSize] = useState(null);

  return (
    <div>
      <h2 className="text-lg font-semibold pt-8 pb-6 font-montserrat">
        Available Sizes
      </h2>
      <ul className="grid grid-cols-3 gap-4">
        {product.sizes.map((size, index) => (
          <li
            key={index}
            className={`flex justify-center items-center border-2 py-2 rounded hover:border-coral-red font-palanquin font-semibold cursor-pointer ${
              size === selectedSize ? "border-coral-red" : ""
            }`}
            onClick={() => setSelectedSize(size)}>
            {size}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoeSizes;
