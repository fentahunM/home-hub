import { FaComments, FaLock, FaHome, FaSearch } from "react-icons/fa";

const Features = () => {
  const services = [
    {
      title: "Authentication",
      description:
        "Login to the system by creating an account or using Google account. Users can also update their profile, change password and logout.",
      icon: <FaLock />,
    },
    {
      title: "Property Listings",
      description:
        "Create, update, delete and view properties for rent or sale with or with out offers.",
      icon: <FaHome />,
    },
    {
      title: "Advanced Search and Filtering",
      description: "Advanced search and filters to quickly find properties.",
      icon: <FaSearch />,
    },
    {
      title: "Contact Property Owners",
      description:
        "Contact property owners or agents directly through our platform",
      icon: <FaComments />,
    },
  ];

  return (
    <section className="bg-white py-16 w-full mx-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-blue-900">
            App Features
          </h2>
          <h2 className="mt-4 text-lg text-blue-600">
            Discover the exceptional services we offer to help you find your
            dream home effortlessly.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 items-center bg-gray-200 rounded-lg p-8 text-center shadow-md hover:scale-105 hover:shadow-lg transition-transform "
            >
              <div className="mb-6 text-indigo-500 text-4xl">
                {service.icon}
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

export default Features;
