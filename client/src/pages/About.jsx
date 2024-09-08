// export default function About() {
//   return (
//     <div className="relative py-10 top-[100px] px-4  mx-auto">
//       <h1 className="text-3xl font-bold mb-4 text-slate-800">About HomeHub</h1>
//       <p className="mb-4 text-slate-700">
//         HomeHub Estate is a leading real estate agency that specializes in
//         helping clients buy, sell, and rent properties in the most desirable
//         neighborhoods. Our team of experienced agents is dedicated to providing
//         exceptional service and making the buying and selling process as smooth
//         as possible.
//       </p>
//       <p className="mb-4 text-slate-700">
//         Our mission is to help our clients achieve their real estate goals by
//         providing expert advice, personalized service, and a deep understanding
//         of the local market. Whether you are looking to buy, sell, or rent a
//         property, we are here to help you every step of the way.
//       </p>
//       <p className="mb-4 text-slate-700">
//         Our team of agents has a wealth of experience and knowledge in the real
//         estate industry, and we are committed to providing the highest level of
//         service to our clients. We believe that buying or selling a property
//         should be an exciting and rewarding experience, and we are dedicated to
//         making that a reality for each and every one of our clients.
//       </p>
//     </div>
//   );
// }

const About = () => {
  return (
    <section className="bg-gray-100 py-16 w-full mx-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-blue-900">About Us</h2>
          <p className="mt-4 text-lg text-gray-600">
            Your one-stop platform for renting and selling homes effortlessly.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section */}
          <div>
            <h3 className="text-2xl font-bold text-blue-800 mb-4">
              Who We Are
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              HomeHub is a modern web application designed to connect home
              seekers with property owners. Built using the powerful MERN stack
              (MongoDB, Express.js, React, and Node.js), our platform provides a
              seamless experience for finding and listing properties.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether you are looking for a rental home or a property to buy,
              HomeHub offers an extensive range of options to suit your needs.
              We aim to simplify the property search process by providing
              intuitive filters and detailed property descriptions.
            </p>
          </div>

          {/* Right Section */}
          <div>
            <h3 className="text-2xl font-bold text-blue-800 mb-4">
              What We Offer
            </h3>
            <ul className="text-gray-600 leading-relaxed space-y-4">
              <li>
                <span className="font-semibold text-blue-900">
                  Extensive Listings:
                </span>{" "}
                Access a wide variety of rental and sale properties in different
                locations, with detailed information and high-quality images.
              </li>
              <li>
                <span className="font-semibold text-blue-900">
                  Easy Navigation:
                </span>{" "}
                Use our intuitive search filters to find your perfect home
              </li>
              <li>
                <span className="font-semibold text-blue-900">
                  Responsive Support:
                </span>{" "}
                Our dedicated support team is here to assist you with any
                inquiries or issues you may encounter.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
