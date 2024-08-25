// components/SocialMediaFeed.js
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const SocialMediaFeed = () => {
  return (
    <div className="social-media-feed p-4 bg-gray-100 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4"></h3>
      <div className="flex justify-center space-x-6">
        {/* Facebook Icon */}
        <a
          href="https://www.facebook.com/yourpage"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
        >
          <FaFacebookF size={24} />
        </a>
        {/* Twitter Icon */}
        <a
          href="https://www.twitter.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-600 transition-colors duration-200"
        >
          <FaTwitter size={24} />
        </a>
        {/* Instagram Icon */}
        <a
          href="https://www.instagram.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:text-pink-700 transition-colors duration-200"
        >
          <FaInstagram size={24} />
        </a>
        {/* LinkedIn Icon */}
        <a
          href="https://www.linkedin.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-blue-900 transition-colors duration-200"
        >
          <FaLinkedinIn size={24} />
        </a>
      </div>
      {/* Add live social media feed here if needed */}
    </div>
  );
};

export default SocialMediaFeed;
