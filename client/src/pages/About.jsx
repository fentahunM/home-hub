import { FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const About = () => {
  return (
    <section className="bg-gray-100 w-full ">
      <div className=" mx-auto ">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-blue-900">
            About HomeHub
          </h2>
          <p className="mt-4 text-lg text-blue-600">
            This project is inspired by my passion for creating accessible and
            user-friendly platforms for people to find their perfect homes.
          </p>
        </div>

        {/* Inspiration Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-bold text-blue-800 mb-4">
            What Inspired This Project?
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            HomeHub is inspired by my desire to create a simple and trustworthy
            platform for finding homes. After seeing the challenges people face
            with complicated path ways, unreliable agents, and hidden fees, I
            envisioned a solution that streamlines the process and provides
            direct, transparent connections between home seekers and property
            owners.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Developing HomeHub as part of my ALX portfolio project allowed me to
            showcase my skills in the MERN stack while tackling a real-world
            problem. Although the core features are in place, there are still a
            tasks to be completed to enhance the user experience and expand the
            platform&apos;s capabilities. I&apos;m excited to continue improving
            HomeHub and sharing its potential to make home hunting easier for
            everyone.
          </p>
          {/* </div> */}

          {/* Social Links Section */}
          <div className="p-4 mb-4">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">
              Connect me
            </h3>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="https://www.linkedin.com/in/fentahun-mengie-1820bb301/"
                  className="text-indigo-600 flex items-center gap-3  hover:text-indigo-800 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn{" "}
                  <span>
                    <FaLinkedin size={20} />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/fentahun360"
                  className="text-indigo-600 flex items-center gap-3  hover:text-indigo-800 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter{" "}
                  <span>
                    <FaTwitterSquare size={20} />
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Project Repository Section */}
          <div className="p-4">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">
              Project repository
            </h3>
            <p className="text-gray-700 leading-relaxed">
              You can view the source code for the HomeHub project on GitHub.
              Feel free to explore, fork, or contribute to the project.
            </p>
            <a
              href="https://github.com/fentahunM/home-hub"
              className="inline-block mt-4 bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
