import Nav from "../components/Nav.jsx";
import Hero from "../Sections/Hero.jsx";
import PopularProducts from "../Sections/PopularProducts.jsx";
import SuperQuality from "../Sections/SuperQuality.jsx";
import Services from "../Sections/Services.jsx";
import SpecialOffers from "../Sections/SpecialOffers.jsx";
import CustomerReviews from "../Sections/CustomerReviews.jsx";


const HomePage = () => {
  return (
    <>
      <main className="relative">
        <Nav />
        <section className="xl:padding-l wide:padding-r padding-b">
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
      </main>
    </>
  );
};

export default HomePage;
