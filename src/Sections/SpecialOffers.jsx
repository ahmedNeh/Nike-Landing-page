import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffers = () => {
  return (
    <section className="flex justify-between items-center max-xl:flex-col-reverse gap-20 max-container">
      <div className="flex">
        <img
          src={offer}
          width={770}
          height={690}
          className="object-contain w-full"
        />
      </div>
      <div className="flex -flex-1 flex-col">
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button label="Shop Now" iconURL={arrowRight} />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
