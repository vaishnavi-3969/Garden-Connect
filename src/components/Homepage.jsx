import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faSeedling } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Flowers from '../assets/flowers.gif';

const Homepage = () => {
  return (
    <>
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white min-h-screen flex items-center justify-center"
    >
      <div className="py-12">
        <div className="container mx-auto px-6 w-full">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Welcome to GardenConnect</h1>
            <p className="text-lg mb-12">
              Discover the joy of community gardening and connect with fellow gardeners near you.
            </p>
            <div className="bg-gray-800 p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Why Choose Garden Connect?</h2>
              <ul className="flex space-x-4 mt-2">
                <li className="mb-2 bg-gray-900 px-2 py-2 rounded-lg hover:scale-105">
                  <FontAwesomeIcon icon={faSeedling} className="text-green-500" />
                  <br />
                  Connect with a vibrant community of passionate gardeners
                </li>
                <li className="mb-2 bg-gray-900 px-2 py-2 rounded-lg hover:scale-105">
                  <FontAwesomeIcon icon={faSeedling} className="text-green-500" />
                  <br />
                  Share gardening tips, resources, and surplus produce
                </li>
                <li className="mb-2 bg-gray-900 px-2 py-2 rounded-lg hover:scale-105">
                  <FontAwesomeIcon icon={faSeedling} className="text-green-500" />
                  <br />
                  Discover nearby community gardens and events
                </li>
                <li className="mb-2 bg-gray-900 px-2 py-2 rounded-lg hover:scale-105">
                  <FontAwesomeIcon icon={faSeedling} className="text-green-500" />
                  <br />
                  Participate in fun gardening challenges and earn rewards
                </li>
                <li className="mb-2 bg-gray-900 px-2 py-2 rounded-lg hover:scale-105">
                  <FontAwesomeIcon icon={faSeedling} className="text-green-500" />
                  <br />
                  Access a marketplace for trading gardening tools and plants
                </li>
              </ul>
            </div>
            <div className="mt-12 text-center">
              <Link
                to="/about"
                className="inline-block px-6 py-3 bg-purple-900 rounded-lg text-white hover:bg-purple-700 transition duration-300"
              >
                Learn More
              </Link>
              <Link
                to="/contact"
                className="inline-block px-6 py-3 bg-purple-700 rounded-lg text-white hover:bg-purple-500 transition duration-300 ml-4"
              >
                Contact Us
              </Link>
            </div>
            <div className="flex justify-between mt-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                className="w-1/2"
              >
                <div className="bg-gray-800 rounded-lg p-6 hover:shadow-xl transition duration-300">
                  <h3 className="text-xl font-bold mb-4">About Us<hr/></h3>
                  <p className="mb-4">
                    GardenConnect is a community-driven platform that aims to bring together gardeners from all walks of life. Our mission is to foster a sense of community and collaboration by connecting individuals who share a passion for gardening.
                  </p>
                  <Link
                    to="/about"
                    className="inline-block px-6 py-3 bg-purple-900 rounded-lg text-white hover:bg-purple-700 transition duration-300"
                  >
                    Read More
                  </Link>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="w-1/2"
              >
                <div className="bg-gray-800 rounded-lg p-6 hover:shadow-xl transition duration-300">
                  <h3 className="text-xl font-bold mb-4">Our Services<hr/></h3>
                  <ul className="list-disc list-inside">
                    <li className="mb-2">Community garden discovery</li>
                    <li className="mb-2">Gardening tips and resources</li>
                    <li className="mb-2">Plant and produce sharing</li>
                    <li className="mb-2">Gardening challenges and rewards</li>
                    <li className="mb-2">Gardening tools and plant marketplace</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      
    </motion.div>
    <div>
        <img src={Flowers} className="w-90"/>
      </div>
      </>
  );
};

export default Homepage;
