import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="text-white min-h-[90vh] flex items-center"
      style={{ backgroundColor: "#231F20" }}
    >
      <div className="container mx-auto px-11 py-16">
        <div className="flex flex-col lg:flex-row justify-around items-start lg:items-center gap-4 lg:gap-8">
          {/* Left side - Logo */}
          <div className="mb-8 lg:mb-0">
            <div className="text-9xl font-bold leading-none mb-0">
              <span className="block">NE</span>
              <span className="block">RA</span>
            </div>
            <div className="text-2xl">Aventour.</div>
          </div>

          {/* Right side - Stay Connected */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-3xl font-bold mb-2">STAY CONNECTED</h3>
            <p className="text-lg mb-4">
              Be the first to discover off-the-beaten-path destinations and
              exclusive travel deals.
            </p>
            <h4 className="text-3xl font-semibold mb-4">
              Sign up for our Logbook
            </h4>
            <form className="mb-6 flex">
              <input
                type="email"
                placeholder="email address"
                className="flex-grow px-4 py-2 bg-transparent rounded-lg border border-white focus:outline-none focus:border-blue-400"
              />
              <button
                type="submit"
                className="ml-2 bg-indigo-700 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition duration-300"
              >
                sign up
              </button>
            </form>
            <nav>
              <ul className="flex flex-wrap justify-start lg:justify-start space-x-6">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-blue-400 transition duration-300"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/adventure"
                    className="hover:text-blue-400 transition duration-300"
                  >
                    Adventure
                  </Link>
                </li>
                <li>
                  <Link
                    href="/logbook"
                    className="hover:text-blue-400 transition duration-300"
                  >
                    Logbook
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-blue-400 transition duration-300"
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
