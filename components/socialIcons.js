import { FaLinkedinIn, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export default function SocialIcons() {
  return (
    <div className="flex">
    <a href="" 
      target="_blank" rel="noopener noreferrer" 
      className="flex items-center m-2 border-2 border-solid border-gray-333 p-2 rounded-full">
      <FaLinkedinIn aria-label="LinkedIn Icon"/>
      
    </a>

    <a href="" 
      target="_blank" rel="noopener noreferrer" 
      className="flex items-center text-2xl m-2 border-2 border-solid border-gray-333 p-1 rounded-full">
      <FaInstagram aria-label="Instagram Icon"/>
    </a>

    <a href="" 
      target="_blank" rel="noopener noreferrer" 
      className="flex items-center text-2xl m-2 border-2 border-solid border-gray-333 p-1 rounded-full">
      <FaFacebook aria-label="Facebook Icon"/>
    </a>

    <a href="" 
      target="_blank" rel="noopener noreferrer" 
      className="flex items-center text-2xl m-2 border-2 border-solid border-gray-333 p-1 rounded-full">
      <FaTwitter aria-label="Twitter Icon"/>
    </a>

    </div>
  );
}