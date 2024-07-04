import { services } from "../constants";
import ServiceCards from "../components/ServiceCards";

const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service) => (
        <ServiceCards key={service.label} {...service} />
      ))}
    </section>
  );
};

export default Services;
