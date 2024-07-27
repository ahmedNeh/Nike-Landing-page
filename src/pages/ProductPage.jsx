import { useParams } from "react-router-dom";
import { products } from "../constants";
import ShoeSizes from "../components/ShoeSizes";
import OtherShoeImgs from "../components/OtherShoeImgs";

const ProductPage = () => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <div className="text-center text-red-500">Product not found</div>;
  }

  return (
    <section className="justify-center max-lg:pt-40 pt-[100px] mx-10">
      <div className=" flex flex-row gap-4 max-lg:flex-col">
        <OtherShoeImgs />
        
        <div className="ml-10 justify-start gap-2.5 max-lg:m-0">
          <h1 className="text-2xl leading-normal font-semibold font-palanquin pb-3">
            {product.name}
          </h1>
          <p className="font-semibold font-montserrat text-coral-red text-2xl pb-3">
            {product.price}
          </p>
          <p className="font-montserrat">{product.description}</p>
          <div className="mb-10">
            <ShoeSizes />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default ProductPage;