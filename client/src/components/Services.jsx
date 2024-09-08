import { FaComments, FaHeadset, FaHome, FaSearch } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      title: "Property Listings",
      description:
        "Browse a wide range of properties for rent and sale. Find the perfect home that fits your needs and budget.",
      icon: <FaHome />,
    },
    {
      title: "Advanced Search Filters",
      description:
        "Use our advanced search filters to quickly find properties.",
      icon: <FaSearch />,
    },
    {
      title: "Direct Communication",
      description:
        "Contact property owners or agents directly through our platform to ensure transparent and secure dealings.",
      icon: <FaComments />,
    },
    {
      title: "Professional Support",
      description:
        "Get assistance from our dedicated support team to help you navigate the platform and resolve any issues.",
      icon: <FaHeadset />,
    },
  ];

  return (
    <section className="bg-white py-16 w-full mx-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-blue-900">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover the exceptional services we offer to help you find your
            dream home effortlessly.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-200 rounded-lg p-8 text-center shadow-md hover:scale-105 hover:shadow-lg transition-transform "
            >
              <div className="mb-6 text-indigo-500 text-4xl">
                <i className={service.icon}></i>
              </div>
              <h3 className="text-2xl font-bold text-blue-800 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
