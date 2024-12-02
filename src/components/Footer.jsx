import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaWordpressSimple } from "react-icons/fa";
import { Link } from "react-router-dom"; // Assuming you're using react-router-dom
import logo from '../assets/logo.jpg';



const Footer = () => {
  return (
    <footer className="bg-[#0d1726] text-white mt-28 py-10">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo */}
        <div className="flex justify-center items-center mx-auto lg:justify-start mb-4 lg:mb-0">
          <img
            src={logo}
            alt="LIFT Logo"
            className="aspect-square w-28 mix-blend-lighten"
          />
        </div>

        {/* Learn More */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-center lg:text-left">Learn More</h3>
          <ul className="space-y-2 text-sm text-center lg:text-left">
            <li>
              <Link to="/about" className="hover:text-gray-400 transition duration-300">
                About Lift
              </Link>
            </li>
            <li>
              <Link to="/press" className="hover:text-gray-400 transition duration-300">
                Press Releases
              </Link>
            </li>
            <li>
              <Link to="/environment" className="hover:text-gray-400 transition duration-300">
                Environment
              </Link>
            </li>
            <li>
              <Link to="/jobs" className="hover:text-gray-400 transition duration-300">
                Jobs
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-gray-400 transition duration-300">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-400 transition duration-300">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Tickets & Booking */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-center lg:text-left">Tickets & Booking</h3>
          <ul className="space-y-2 text-sm text-center lg:text-left">
            <li>
              <Link to="/tickets" className="hover:text-gray-400 transition duration-300">
                Lift Tickets
              </Link>
            </li>
            <li>
              <Link to="/passes" className="hover:text-gray-400 transition duration-300">
                Season Passes
              </Link>
            </li>
            <li>
              <Link to="/packages" className="hover:text-gray-400 transition duration-300">
                Vacation Packages
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-center lg:text-left">Contact Us</h3>
          <ul className="space-y-2 text-sm text-center lg:text-left">
            <li>
              Hotel Reservation:{" "}
              <span className="font-bold hover:text-gray-400 transition duration-300">
                123-456-7890
              </span>
            </li>
            <li>
              Ticket Office:{" "}
              <span className="font-bold hover:text-gray-400 transition duration-300">
                123-456-7890
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Social Icons */}
      <div className="max-w-7xl mx-auto px-4 mt-8 flex flex-col sm:flex-row items-center justify-between border-t border-white/20 pt-6">
        <div className="text-sm text-center sm:text-left">
          © 2019 Lift Media | All Rights Reserved
        </div>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
          >
            <FaYoutube />
          </a>
          <a
            href="https://wordpress.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
          >
            <FaWordpressSimple />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

