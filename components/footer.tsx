import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="border-t border-default dark:border-default">
      <div className="container mx-auto max-w-7xl flex-grow py-6 px-6 flex items-center justify-between">
        <span className="text-sm">© {new Date().getFullYear()} Caratunk Contractors</span>
        <div className="flex gap-4">
          <a
            href="https://instagram.com/caratunk_contractors?igsh=Ym9wbHAzY245NG1w"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-xl hover:text-pink-500 transition-colors"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/people/Caratunk-Contractors/61550600411175/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-xl hover:text-blue-600 transition-colors"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </footer>
  );
};
