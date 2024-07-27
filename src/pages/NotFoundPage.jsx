
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const PageNotFound = () => {
  return (
    <section className="text-center flex flex-col justify-center items-center h-[80vh]">
      <FaExclamationTriangle className="text-coral-red text-8xl mb-4" />
      <h1 className=" text-4xl font-bold mb-4 text-black">404 Not Found</h1>
      <p className="text-xl mb-5 text-black">This page does not exist</p>
      <Link
        to="/"
        className="text-white bg-coral-red hover:bg-red-600 transition-all duration-300 rounded-md px-3 py-2 mt-4">
        Go Back
      </Link>
    </section>
  );
};

export default PageNotFound;
