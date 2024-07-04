import CustomerReviews from "../src/Sections/CustomerReviews.jsx";
import Hero from "../src/Sections/Hero.jsx";
import PopularProducts from "../src/Sections/PopularProducts.jsx";
import Footer from "../src/Sections/Footer.jsx";
import Services from "../src/Sections/Services.jsx";
import SpecialOffers from "../src/Sections/SpecialOffers.jsx";
import SuperQuality from "../src/Sections/SuperQuality.jsx";
import Subscribe from "../src/Sections/Subscribe.jsx";
import Nav from "./components/Nav.jsx";

const App = () => {
  return (
    <>
      <main className="relative">
        <Nav />
        <section className=" xl:padding-l wide:padding-r padding-b">
          <Hero />
        </section>
        <section className="padding">
          <PopularProducts />
        </section>
        <section className="padding">
          <SuperQuality />
        </section>
        <section className="padding-x py-10">
          <Services />
        </section>
        <section className="padding">
          <SpecialOffers />
        </section>
        <section className="bg-pale-blue padding">
          <CustomerReviews />
        </section>
        <section className="bg-black padding-x padding-y pb-8">
          <Footer />
        </section>
      </main>
    </>
  );
};

export default App;
