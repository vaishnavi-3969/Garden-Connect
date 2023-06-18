import { motion } from "framer-motion";

const Footer = () => {
  const footerVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <motion.footer
      className="bg-gray-900 text-white py-6 px-6"
      initial="initial"
      animate="animate"
      variants={footerVariants}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h4 className="text-lg font-bold mb-2">Garden Connect</h4>
          <p className="text-gray-400">Connecting gardeners worldwide</p>
        </div>
        <div className="flex space-x-4">
          <a
            href="/"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              whileHover={{ scale: 1.2 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 2C6.486 2 2 6.486 2 12c0 5.514 4.486 10 10 10s10-4.486 10-10c0-5.514-4.486-10-10-10zm0 18v-5.67c0-1.311.131-2.592.38-3.805-1.581.085-3.137.52-4.561 1.304C7.957 9.953 7.54 9.045 7.54 8c0-1.737 1.414-3.152 3.152-3.152 1.418 0 2.65.938 3.072 2.274.097-.201.201-.396.317-.582.112-.174.23-.34.355-.497-.257-.027-.52-.041-.787-.041-2.164 0-3.92 1.756-3.92 3.92 0 .307.035.605.1.894C10.315 13.068 8.85 12.91 7.54 12.328v2.112c1.369.65 2.91 1.03 4.5 1.03s3.131-.38 4.5-1.03v-1.808c0-1.216.245-2.387.728-3.462C18.21 9.992 20 11.998 20 14.33V20h-2v-5.67c0-1.311-.131-2.592-.38-3.805C17.19 11.28 18 12.645 18 14.33v1.808c0 .817-.162 1.604-.482 2.343.497.152 1.011.254 1.532.254 1.737 0 3.152-1.414 3.152-3.152v-2.112c-1.369.65-2.91 1.03-4.5 1.03-1.59 0-3.131-.38-4.5-1.03v1.808c0 1.216-.245 2.387-.728 3.462.16.452.328.9.503 1.342.218.554.456 1.097.71 1.63h-1.207C12.322 21.984 12 21.265 12 20c0-1.219.883-2.235 2.054-2.454z"
              />
            </motion.svg>
          </a>
          <a
            href="/"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              whileHover={{ scale: 1.2 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 6.75a.75.75 0 00-1.306-.542l-2.442 2.443a6.993 6.993 0 00-3.428-1.882L13.5 4H10l-1.324 2.769a6.993 6.993 0 00-3.428 1.882L3.306 6.208A.75.75 0 002 6.75v10.5a.75.75 0 001.306.542l2.442-2.443a6.993 6.993 0 003.428 1.882L10.5 20h3.878l1.324-2.769a6.993 6.993 0 003.428-1.882l2.442 2.443a.75.75 0 001.306-.542V6.75zM12 18a3 3 0 100-6 3 3 0 000 6z"
              />
            </motion.svg>
          </a>
          <a
            href="/"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              whileHover={{ scale: 1.2 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 2C6.486 2 2 6.486 2 12c0 5.514 4.486 10 10 10s10-4.486 10-10c0-5.514-4.486-10-10-10zm0 18V8m0 0c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5zM9 13a3 3 0 110-6 3 3 0 010 6zm6 0a3 3 0 110-6 3 3 0 010 6z"
              />
            </motion.svg>
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
